import { Button, Grid } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import Header from '../../pages/Header';
import ExcelJS from 'exceljs';
import Dashboard from '../../pages/Dashboard';
import { DataGrid } from '@mui/x-data-grid';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import IpRevenueExport from '../../exportfile/billing/IpRevenueExport';
import { UserInformation } from '../../context/AuthContext';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Search } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';
import { useDropzone } from 'react-dropzone';


const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

const IpRevenueIReport = () => {
    const { user } = useContext(UserInformation)
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()
    const [userData, setUserData] = useState()
    const [importedData, setImportedData] = useState([]);  //for Excel import
    const fileInputRef = useRef(null);   //for Excel import
    const ip = useFetch('/iprevenuereport/getIpRevenueReport')
    const checkIpRevenueReportDetails = async () => {
        try {
            console.log('***', toDate);
            const url = `/iprevenuereport/getIpRevenueReportRange/${moment(fromDate).format('DD-MM-YYYY')}/${moment(toDate).format('DD-MM-YYYY')}`
            const res = await axios.get(url)
            setUserData(res.data)
        }

        catch (error) {
            console.log(error);
        }
    }

    const handleFileChange = async (event) => {
        event.preventDefault()
        
        const file = importedData.file
        // const file = acceptedFile[0]
        console.log("size:",(file.size/1024));
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
                        // await new Promise(resolve => setTimeout(resolve, 1000));
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
                       
                        const res = await axios.post(`/iprevenuereport/addIpRevenueReport`, singleObject)
                        ip.refetch('/iprevenuereport/getIpRevenueReport')

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
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: handleFileChange,
        accept: '.xlsx' // Specify accepted file types
    });
    

    const ipRevenue = [
        { field: 's_no', headerName: 'S.No' },
        { field: 'mrn', headerName: 'MRN', width: 150 },
        { field: 'referred_type', headerName: 'Referred Type', width: 150 },
        { field: 'referred_by', headerName: 'Referred By' },
        { field: 'ipd_no', headerName: 'IPD No', width: 150 },
        { field: 'patient_name', headerName: 'Patient Name', width: 200 },
        { field: 'area', headerName: 'Area', width: 150 },
        { field: 'bill_no', headerName: 'Bill No' },
        { field: 'bill_date', headerName: 'Bill Date' },
        { field: 'customer_segment', headerName: 'Customer Segment', width: 150 },
        { field: 'payor', headerName: 'Payor' },
        { field: 'payor_agreement', headerName: 'Payor Agreement', width: 150 },
        { field: 'tpa', headerName: 'TPA' },
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
        { field: 'payment_through_online_poratal', headerName: 'Payment Through Online Poratal', width: 150 },
        { field: 'neft_rtgs', headerName: 'NEFT/RTGS' },
        { field: 'upi_qr', headerName: 'UPI/QR' },
        { field: 'advance_adjustment', headerName: 'Advance Adjustment', width: 150 },
        { field: 'credit_note', headerName: 'Credit Note' },
        { field: 'credit_note_consumption', headerName: 'Credit Note Consumption' },
        { field: 'due_amount', headerName: 'Due Amount' },
        { field: 'bed_category', headerName: 'Bed Category', width: 150 },
        { field: 'bed_name', headerName: 'Bed Name', width: 150 },
        { field: 'date_of_admission', headerName: 'Date Of Admission', width: 150 },
        { field: 'date_of_discharge', headerName: 'Date Of Discharge', width: 150 },
        { field: 'total_stays_in_no_of_days', headerName: 'Total Stays In No Of Days', width: 200 },
        { field: 'no_of_days_in_ward', headerName: 'No Of Days In Ward', width: 150 },
        { field: 'admitted_doctor', headerName: 'Admitted Doctor', width: 150 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'state', headerName: 'State' },
        { field: 'city', headerName: 'City' },

    ]

    return (
        <>

            <Header />
            {/* <Grid item width={'100%'}> */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <h3>IP Revenue Report</h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <input type='file' name='import_file' onChange={(e) => setImportedData({ file: e.target.files[0] })} ref={fileInputRef} />
                <Button style={{ marginTop: '10px', width: '80px', backgroundColor: '#177bad' }} variant='contained' type='submit' onClick={handleFileChange}>Upload</Button>
            </div>
             

            {/* <div>
                <div {...getRootProps()} style={dropzoneStyles}>
                    <input {...getInputProps()} />
                    <p>Drag and drop an Excel file here, or click to select one</p>
                </div>
                <input type="file" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
            </div> */}

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }} >

                <LocalizationProvider dateAdapter={AdapterDayjs}  >

                    <DatePicker label={'From Date'} onChange={(fromDate) => setFromDate((new Date(fromDate)))} slotProps={{ textField: { size: 'small' } }} sx={{ width: '150px' }} />

                    <DatePicker label={'To Date'} onChange={(toDate) => setToDate((new Date(toDate)))} slotProps={{ textField: { size: 'small' } }} sx={{ width: '150px' }} />

                    <Button style={{ width: '80px', backgroundColor: '#177bad' }} variant={'contained'} onClick={() => checkIpRevenueReportDetails()} > <Search /> &nbsp;Find</Button>

                </LocalizationProvider>

            </div>

            {/* </Grid> */}
            <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px' }}>
                {!userData ? (<><h2 style={{ color: '#177bad' }}>L O A D I N G</h2></>) : (<>
                    <div style={{ height: '600px', width: '1500px' }}>
                        <DataGrid
                            editMode='row'
                            columns={ipRevenue}
                            // rows={ip.data}
                            rows={userData}
                            getRowId={row => row._id}
                            // processRowUpdate={updateItem}
                            experimentalFeatures={{ newEditingApi: true }}

                        />
                        <IpRevenueExport data={userData} date={toDate} />

                    </div>
                </>)}
            </Grid>
        </>
    )
}

export default IpRevenueIReport
{/* <Dashboard/> */ }