import { Button, Grid } from '@mui/material'
import React, { useRef, useState } from 'react'
import Header from '../../pages/Header';
import ExcelJS from 'exceljs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DataGrid } from '@mui/x-data-grid';
import { Search } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const CollectionReport = () => {
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()
    const [userData, setUserData] = useState()
    const [importedData, setImportedData] = useState([]);  //for Excel import
    const fileInputRef = useRef(null);   //for Excel import

    const handleFileChange = async (event) => {
        console.log('manasi');
        event.preventDefault()
        const file = importedData.file
        if (file) {
            try {
                const fileReader = new FileReader();

                fileReader.onload = async (e) => {
                    const fileData = e.target.result;
                    // const workbook = new ExcelJS.Workbook();
                    const workbook = new ExcelJS.Workbook();
                    const buffer = new Uint8Array(fileData);
                    await workbook.xlsx.load(buffer);
                    const worksheet = workbook.getWorksheet(1);
                    const data = [];
                    let finalRow;
                    let rowData1;

                    worksheet.eachRow(async (row, rowNumber) => {

                        if (rowNumber === 1) {
                            const rowData = [];
                            row.eachCell((cell, colNumber) => {
                                rowData.push(cell.value.trim());

                            });
                            finalRow = rowData?.map((element, index) => {
                                return element.replaceAll(' ', '_').toLowerCase()
                            })
                            data.push(finalRow);
                        }
                        else {
                            rowData1 = [];
                            row.eachCell((cell, colNumber) => {
                                if (typeof cell.value === 'string') {
                                    rowData1.push(cell.value.trim().toUpperCase());
                                } else {
                                    // Handle the case when cell.value is not a string
                                    rowData1.push(cell.value); // Or perform other actions as needed
                                }

                            });
                            data.push(rowData1);
                        }

                        const finalData = finalRow?.map((item, index) => ({
                            [item]: rowData1[index]
                        }))
                        //converting array of objects into single object
                        const singleObject = finalData.reduce((acc, curr) => {
                            return { ...acc, ...curr };
                        }, {});
                        console.log(singleObject);
                        // const res = await axios.post(`/inventory/itemconsumable/addItem`, singleObject)
                        // consumable.refetch('/inventory/itemconsumable/getItem')
                    });
                    alert("Items Imported Successfully...")

                    fileInputRef.current.value = '';
                };
                fileReader.readAsArrayBuffer(file);
            } catch (error) {
                console.error('Error while importing data:', error);
            }
        }

    };


    const ipRevenue = [
       {field:'s_no',headerName:'S No'},
       {field:'mrn',headerName:'MRN'},
       {field:'referred_type',headerName:'Referred Type'},
       {field:'referred_by',headerName:'Referred By'},
       {field:'ipd_no',headerName:'IPD No'},
       {field:'patient_name',headerName:'patient_name'},
       {field:'area',headerName:'area'},
       {field:'bill_no',headerName:'bill_no'},
       {field:'bill_date',headerName:'bill_date'},
       {field:'customer_segment',headerName:'customer_segment'},
       {field:'payor',headerName:'payor'},
       {field:'payor_agreement',headerName:'payor_agreement'},
       {field:'tpa',headerName:'tpa'},
       {field:'bill_amount',headerName:'bill_amount'},
       {field:'gross_bill_value',headerName:'gross_bill_value'},
       {field:'credit_note',headerName:'credit_note'},
       {field:'bill_amount_1',headerName:'bill_amount_1'},
       {field:'tcscollected',headerName:'tcscollected'},
       {field:'bill_amount_2',headerName:'bill_amount_2'},
       {field:'discount',headerName:'discount'},
       {field:'net_bill_value',headerName:'net_bill_value'},
       {field:'cash',headerName:'cash'},
       {field:'card',headerName:'card'},
       {field:'cheque',headerName:'cheque'},
       {field:'online_transfer',headerName:'online_transfer'},
       {field:'payment_through_online_poratal',headerName:'payment_through_online_poratal'},
       {field:'neft_rtgs',headerName:'neft_rtgs'},
       {field:'upi_qr',headerName:'upi_qr'},
       {field:'advance_adjustment',headerName:'advance_adjustment'},
       {field:'credit_note',headerName:'credit_note'},
       {field:'credit_note_consumption',headerName:'credit_note_consumption'},
       {field:'due_amount',headerName:'due_amount'},
       {field:'bed_category',headerName:'bed_category'},
       {field:'bed_name',headerName:'bed_name'},
       {field:'date_of_admission',headerName:'date_of_admission'},
       {field:'date_of_discharge',headerName:'date_of_discharge'},
       {field:'total_stays_in_no_of_days',headerName:'total_stays_in_no_of_days'},
       {field:'no_of_days_in_ward',headerName:'no_of_days_in_ward'},
       {field:'admitted_doctor',headerName:'admitted_doctor'},
       {field:'department',headerName:'department'},
       {field:'state',headerName:'state'},
       {field:'city',headerName:'city'},
     
    ]
    return (
        <>

        <Header />
        {/* <Grid item width={'100%'}> */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <h3>Collection Report</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <input type='file' name='import_file' onChange={(e) => setImportedData({ file: e.target.files[0] })} ref={fileInputRef} />
            <Button style={{ marginTop: '10px', width: '80px', backgroundColor: '#177bad' }} variant='contained' type='submit' onClick={handleFileChange}>Upload</Button>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center',flexWrap: 'wrap', marginTop: '20px' }} >

            <LocalizationProvider dateAdapter={AdapterDayjs}  >

                <DatePicker label={'From Date'} onChange={(fromDate) => setFromDate(moment(new Date(fromDate)))}   slotProps={{ textField: { size: 'small' } }} sx={{width:'150px'}}  />

                <DatePicker label={'To Date'} onChange={(toDate) => setToDate(moment(new Date(toDate))?.add(1, 'day'))}  slotProps={{ textField: { size: 'small' } }} sx={{width:'150px'}}/>

                <Button style={{  width: '80px', backgroundColor: '#177bad' }} variant={'contained'} onClick={() => checkIpRevenueReportDetails()} > <Search /> &nbsp;Find</Button>

            </LocalizationProvider>

        </div>

        {/* </Grid> */}
        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px' }}>
                {!userData ? (<><h2 style={{color: '#177bad'}}>L O A D I N G</h2></>) : (<>
            <div style={{ height: '500px', width: '1500px' }}>
                    <DataGrid
                        editMode='row'
                        columns={ipRevenue}
                        // rows={ip.data}
                        rows={userData}
                        getRowId={row => row._id}
                        // processRowUpdate={updateItem}
                        experimentalFeatures={{ newEditingApi: true }}

                    />
                    {/* <IpRevenueExport data={userData} date={toDate}/> */}

            </div>
                </>)}
        </Grid>
    </>
    )
}

export default CollectionReport