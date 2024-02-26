import { Close } from '@mui/icons-material';
import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react'
import Excel from 'exceljs';
import { saveAs } from 'file-saver';

// const workbook = new Excel.Workbook();
const workSheetName = "OP Revenue Report";
const workBookName = 'OP Revenue Report';

const OpRevenueExport = (props) => {
    const [open, setOpen] = useState(false)
    const [column, setColumn] = useState([])
    const {data, date} =props

    const exportdata = async () => {
        try {
            const fileName = workBookName;
            const worksheet = workbook.addWorksheet(workSheetName);

            worksheet.mergeCells(`A1:${String.fromCharCode(64 + header.length)}1`)
            worksheet.getRow(1).getCell('B').value = 'OP Revenue Report upto '+ moment(date).format('DD/MM/YYYY')
            worksheet.getRow(1).font = { bold: true, size: 17 };
            worksheet.getRow(1).alignment = { horizontal: 'center' };
            
            worksheet.getCell('A1').fill = {
                type: 'pattern',
                pattern: 'lightDown',
                bgColor: { argb: 'e0e0e0' },
                fgColor: { argb: 'e0e0e0' }
            };

            // replacing '_' by blank space ' ' and making 1st letter in upper case and other are in lower case
            const header = column.map(col => col.key.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
            worksheet.getRow(1).values = header;

            data?.forEach((item, index) => {
                let rowValues = [];
             
                column.forEach(column => {
                    rowValues.push(item[column.key]);
                });
                worksheet.addRow(rowValues);
            });
            const buf = await workbook.xlsx.writeBuffer();
            saveAs(new Blob([buf]), `${fileName}.xlsx`);
            setOpen(false)

        } catch (error) {
            console.log(error);
        }
        finally {
            workbook.removeWorksheet(workSheetName);
        }
    }

    const handleColumnToggle = (key, checked) => {
        if (checked) {
            setColumn(prevColumns => [...prevColumns, { key }]);
        } else {
            setColumn(prevColumns => prevColumns.filter(col => col.key !== key));
        }
    };

  return (
    <>
    <div>
    <Modal open={open} style={{ width: '1400px' }}>
                <div >
                    <Box sx={{ color: 'black', m: '400px', p: '30px', border: '3px solid white', borderRadius: '20px', backgroundColor: 'white', transform: 'translate(40%, -50%)' }}  >
                        <div style={{ textAlign: 'right' }}>
                            <Button onClick={() => setOpen(false)}> <Close /> </Button>
                        </div>
                        <h2>Select Column:</h2>
                        <div >

                            <input type={'checkbox'} checked={column?.some(col => col.key === 's_no')} onChange={(e) => handleColumnToggle('s_no', e.target.checked)} /> s no&nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'mrn')} onChange={(e) => handleColumnToggle('mrn', e.target.checked)} /> MRN&nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'referred_type')} onChange={(e) => handleColumnToggle('referred_type', e.target.checked)} /> Referred Type&nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'referred_by')} onChange={(e) => handleColumnToggle('referred_by', e.target.checked)} name={'referred_by'} />Referred By &nbsp;&nbsp;

                            <input type={'checkbox'} checked={column?.some(col => col.key === 'op_er_no')} onChange={(e) => handleColumnToggle('op_er_no', e.target.checked)} name={'op_er_no'} /> OP ER No&nbsp;&nbsp;<br /><br />
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'patient_name')} onChange={(e) => handleColumnToggle('patient_name', e.target.checked)} name={'patient_name'} />patient Name&nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'area')} onChange={(e) => handleColumnToggle('area', e.target.checked)} name={'area'} />Area &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'bill_no')} onChange={(e) => handleColumnToggle('bill_no', e.target.checked)} name={'bill_no'} />Bill No &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'bill_date')} onChange={(e) => handleColumnToggle('bill_date', e.target.checked)} name={'bill_date'} />Bill Date &nbsp;&nbsp;

                            <input type={'checkbox'} checked={column?.some(col => col.key === 'customer_segment')} onChange={(e) => handleColumnToggle('customer_segment', e.target.checked)} name={'customer_segment'} />Customer Segment &nbsp;&nbsp;<br />
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'payor')} onChange={(e) => handleColumnToggle('payor', e.target.checked)} name={'payor'} />Payor &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'payor_agreement')} onChange={(e) => handleColumnToggle('payor_agreement', e.target.checked)} name={'payor_agreement'} />Payor Agreement &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'payor_company_name')} onChange={(e) => handleColumnToggle('payor_company_name', e.target.checked)} name={'payor_company_name'} />Payor Company Name &nbsp;&nbsp;

                            <input type={'checkbox'} checked={column?.some(col => col.key === 'bill_amount')} onChange={(e) => handleColumnToggle('bill_amount', e.target.checked)} name={'bill_amount'} />Bill Amount &nbsp;&nbsp; <br /><br />
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'gross_bill_value')} onChange={(e) => handleColumnToggle('gross_bill_value', e.target.checked)} name={'gross_bill_value'} />Gross Bill Value &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'credit_note')} onChange={(e) => handleColumnToggle('credit_note', e.target.checked)} name={'credit_note'} /> Credit Note&nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'bill_amount_1')} onChange={(e) => handleColumnToggle('bill_amount_1', e.target.checked)} name={'bill_amount_1'} />Bill Amount 1
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'tcscollected')} onChange={(e) => handleColumnToggle('tcscollected', e.target.checked)} name={'tcscollected'} /> TCSCollected&nbsp;&nbsp; <br /><br />
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'bill_amount_2')} onChange={(e) => handleColumnToggle('bill_amount_2', e.target.checked)} name={'bill_amount_2'} />Bill Amount 2 &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'discount')} onChange={(e) => handleColumnToggle('discount', e.target.checked)} name={'discount'} />Discount &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'net_bill_value')} onChange={(e) => handleColumnToggle('net_bill_value', e.target.checked)} name={'net_bill_value'} />Net Bill Value &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'cash')} onChange={(e) => handleColumnToggle('cash', e.target.checked)} name={'cash'} />Cash &nbsp;&nbsp;

                            <input type={'checkbox'} checked={column?.some(col => col.key === 'card')} onChange={(e) => handleColumnToggle('card', e.target.checked)} name={'card'} />Card &nbsp;&nbsp; <br /><br />
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'cheque')} onChange={(e) => handleColumnToggle('cheque', e.target.checked)} name={'cheque'} />Cheque &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'online_transfer')} onChange={(e) => handleColumnToggle('online_transfer', e.target.checked)} name={'online_transfer'} />Online Transfer &nbsp;&nbsp;

                            <input type={'checkbox'} checked={column?.some(col => col.key === 'payment_through_online_poratal')} onChange={(e) => handleColumnToggle('payment_through_online_poratal', e.target.checked)} name={'payment_through_online_poratal'} />Payment Through Online Portal &nbsp;&nbsp; <br /><br />
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'neft_rtgs')} onChange={(e) => handleColumnToggle('neft_rtgs', e.target.checked)} name={'neft_rtgs'} />NEFT RTGS &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'upi_qr')} onChange={(e) => handleColumnToggle('upi_qr', e.target.checked)} name={'upi_qr'} />UPI QR &nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'advance_adjustment')} onChange={(e) => handleColumnToggle('advance_adjustment', e.target.checked)} name={'advance_adjustment'} />Advance Adjustment &nbsp;&nbsp;

                            <input type={'checkbox'} checked={column?.some(col => col.key === 'credit_note')} onChange={(e) => handleColumnToggle('credit_note', e.target.checked)} name={'credit_note'} />Credit Note &nbsp;&nbsp; <br /><br />
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'credit_note_consumption')} onChange={(e) => handleColumnToggle('credit_note_consumption', e.target.checked)} name={'credit_note_consumption'} /> Credit Note Consumption&nbsp;&nbsp;
                            <input type={'checkbox'} checked={column?.some(col => col.key === 'due_amount')} onChange={(e) => handleColumnToggle('due_amount', e.target.checked)} name={'due_amount'} /> Due Amount&nbsp;&nbsp;
                                                
                        </div>
                        <Button variant='contained' onClick={() => exportdata({})} sx={{ marginTop: '20px', backgroundColor: '#177bad' }}>Export</Button>&nbsp;&nbsp;
                        <br />
                    </Box>

                </div>
            </Modal>
            {/* {data?setDisabled(false):setDisabled(true)} onClick={saveExcel} */}
            <Button variant='contained' onClick={() => setOpen(true)} sx={{ marginTop: '10px', backgroundColor: '#177bad' }}>Export in XLSX</Button>


    </div>
    </>
  )
}

export default OpRevenueExport