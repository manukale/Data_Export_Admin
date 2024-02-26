import { Button, Grid } from '@mui/material'
import React, { useRef, useState } from 'react'
import Header from '../../pages/Header';
import ExcelJS from 'exceljs';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';
import { DataGrid } from '@mui/x-data-grid';
import { Search } from '@mui/icons-material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';
import OpRevenueExport from '../../exportfile/billing/OpRevenueExport';

const OpRevenueReport = () => {
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()
    const [userData, setUserData] = useState()
    const [importedData, setImportedData] = useState([]);  //for Excel import
    const fileInputRef = useRef(null);   //for Excel import
    const op = useFetch('/oprevenuereport/getOpRevenueReport')
    console.log(op);

    const checkOpRevenueReportDetails = async () => {
        try {
           if((moment(fromDate).format('DD-MM-YYYY')) < (moment(toDate).format('DD-MM-YYYY'))){

               const url = `/oprevenuereport/getOpRevenueReportRange/${moment(fromDate).format('DD-MM-YYYY')}/${moment(toDate).format('DD-MM-YYYY')}`
               const res = await axios.get(url)
               setUserData(res.data)
           } else {
            alert('From Date should be less than to date')
           }

        } catch (error) {
            console.log(error);
        }
    }

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
                        const res = await axios.post(`/oprevenuereport/addOpRevenueReport`, singleObject)
                        op.refetch('/oprevenuereport/getOpRevenueReport')
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


    const opRevenue = [
        { field: 's_no', headerName: 'S No' },
        { field: 'mrn', headerName: 'MRN', width: 150 },
        { field: 'referred_type', headerName: 'Referred Type', width: 150 },
        { field: 'referred_by', headerName: 'Referred By' },
        { field: 'op_er_no', headerName: 'OP ER no' },
        { field: 'patient_name', headerName: 'Patient Name', width: 150 },
        { field: 'area', headerName: 'Area', width: 150 },
        { field: 'bill_no', headerName: 'Bill No' },
        { field: 'bill_date', headerName: 'Bill Date' },
        { field: 'customer_segment', headerName: 'Customer Segment', width: 150 },
        { field: 'payor', headerName: 'Payor' },
        { field: 'payor_agreement', headerName: 'Payor Agreement', width: 150 },
        { field: 'payor_company_name', headerName: 'Payor Company Name', width: 150 },
        { field: 'bill_amount', headerName: 'Bill Amount' },
        { field: 'gross_bill_value', headerName: 'Gross Bill Value', width: 150 },
        { field: 'credit_note', headerName: 'Credit Note' },
        { field: 'bill_amount_1', headerName: 'Bill Amount 1' },
        { field: 'tcscollected', headerName: 'TCSCollected' },
        { field: 'bill_amount_2', headerName: 'Bill Amount 2' },
        { field: 'discount', headerName: 'Discount' },
        { field: 'net_bill_value', headerName: 'Net Bill Value' },
        { field: 'cash', headerName: 'Cash' },
        { field: 'card', headerName: 'Card' },
        { field: 'cheque', headerName: 'Cheque' },
        { field: 'online_transfer', headerName: 'Online Transfer', width: 150 },
        { field: 'neft_rtgs', headerName: 'NEFT RTGS' },
        { field: 'upi_qr', headerName: 'UPI QR' },
        { field: 'payment_through_online_poratal', headerName: 'Payment Through Online Poratal' },
        { field: 'advance_adjustment', headerName: 'Advance Adjustment', width: 150 },
        { field: 'credit_note', headerName: 'Credit Note' },
        { field: 'credit_note_consumption', headerName: 'Credit Note Consumption' },
        { field: 'due_amount', headerName: 'Due Amount' },
    ]
    return (
        <>

            <Header />
            {/* <Grid item width={'100%'}> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <h3>OP Revenue Report</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <input type='file' name='import_file' onChange={(e) => setImportedData({ file: e.target.files[0] })} ref={fileInputRef} />
                <Button style={{ marginTop: '10px', width: '80px', backgroundColor: '#177bad' }} variant='contained' type='submit' onClick={handleFileChange}>Upload</Button>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }} >

                <LocalizationProvider dateAdapter={AdapterDayjs}  >

                    <DatePicker label={'From Date'} onChange={(fromDate) => setFromDate(moment(new Date(fromDate)))} slotProps={{ textField: { size: 'small' } }} sx={{ width: '150px' }} />

                    <DatePicker label={'To Date'} onChange={(toDate) => setToDate(moment(new Date(toDate))?.add(1, 'day'))} slotProps={{ textField: { size: 'small' } }} sx={{ width: '150px' }} />

                    <Button style={{ width: '80px', backgroundColor: '#177bad' }} variant={'contained'} onClick={() => checkOpRevenueReportDetails()} > <Search /> &nbsp;Find</Button>

                </LocalizationProvider>

            </div>

            <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px' }}>
                    {!userData ? (<><h2 style={{color: '#177bad'}}>L O A D I N G</h2></>) : (<>
                <div style={{ height: '500px', width: '1500px' }}>
                        {/* <HardwareExport data={hardware.data} type={'inventory'} /> */}
                        <DataGrid
                            editMode='row'
                            columns={opRevenue}
                            // rows={op.data}
                            rows={userData}
                            getRowId={row => row._id}
                            // processRowUpdate={updateItem}
                            experimentalFeatures={{ newEditingApi: true }}

                        />
                         <OpRevenueExport data={userData} date={toDate}/>
                </div>
                    </>)}

            </Grid>
            {/* </Grid> */}
        </>
    )
}

export default OpRevenueReport