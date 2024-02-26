import { useState } from 'react'
import './App.css'
import { Stack } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

import BillingReport from './report/BillingReport'
import IpRevenueIReport from './report/Billing/IpRevenueIReport'
import OpRevenueReport from './report/Billing/OpRevenueReport'
import RevenueDetailReport from './report/Billing/RevenueDetailReport'
import CollectionReport from './report/Billing/CollectionReport'
import DepositeReceivedReport from './report/Billing/DepositeReceivedReport'
import ItemwiseServiceReport from './report/Billing/ItemwiseServiceReport'

import IpdReport from './report/IpdReport'
import DaywiseOccupancyDetail from './report/ipdreport/DaywiseOccupancyDetail'
import DischargeIpReport from './report/ipdreport/DischargeIpReport'
import DischargeTATReport from './report/ipdreport/DischargeTATReport'
import IpOccupancyReportStatic from './report/ipdreport/IpOccupancyReportStatic'
import IpRegistration from './report/ipdreport/IpRegistration'
import IpUtilization from './report/ipdreport/IpUtilization'

import LabTatReport from './report/lab/LabTatReport'
import LabTestwiseCountNew from './report/lab/LabTestwiseCountNew'

import MLCPatientReport from './report/mr/MLCPatientReport'

import OpdReport from './report/OpdReport'
import OpPatientWaitingTime from './report/opdreport/OpPatientWaitingTime'
import OutPatientReport from './report/opdreport/OutPatientReport'
import TokenDetails from './report/opdreport/TokenDetails'

import VisitStatisticsReport from './report/operations/VisitStatisticsReport'

import RegistratiobnReport from './report/RegistratiobnReport'
import NewRegisteredPatient from './report/registration/NewRegisteredPatient'
import PatientDemographicreport from './report/registration/PatientDemographicreport'

import { AuthContextProvider } from './context/AuthContext'

function App() {
 

  return (
    <>
    <AuthContextProvider>
  <BrowserRouter>
  <Routes>
    <Route path = '/login' element= {<Login/>} />
    <Route path = '/' element= {<Login/>} />
    <Route path = '/dashboard' element= {<Dashboard/>} />

    <Route path = '/billingreport' element= {<BillingReport/>} />
    <Route path = '/collectionreport' element= {<CollectionReport/>} />
    <Route path = '/depositereceivedreport' element= {<DepositeReceivedReport/>} />
    <Route path = '/iprevenuereport' element= {<IpRevenueIReport/>} />
    <Route path = '/itemwiseservicereport' element= {<ItemwiseServiceReport/>} />
    <Route path = '/oprevenuereport' element= {<OpRevenueReport/>} />
    <Route path = '/revenuedetailreport' element= {<RevenueDetailReport/>} />

    <Route path = '/ipdreport' element= {<IpdReport/>} />
    <Route path = '/daywiseoccupancydetail' element= {<DaywiseOccupancyDetail/>} />
    <Route path = '/dischargeipreport' element= {<DischargeIpReport/>} />
    <Route path = '/dischargetatreport' element= {<DischargeTATReport/>} />
    <Route path = '/ipoccupancyreport' element= {<IpOccupancyReportStatic/>} />
    <Route path = '/ipregistration' element= {<IpRegistration/>} />
    <Route path = '/iputilization' element= {<IpUtilization/>} />

    <Route path = '/labtatreport' element= {<LabTatReport/>} />
    <Route path = '/labtestwisecountnew' element= {<LabTestwiseCountNew/>} />

    <Route path = '/mlcpatientreport' element= {<MLCPatientReport/>} /> 

    <Route path = '/opdreport' element= {<OpdReport/>} />
    <Route path = '/oppatientwaitingtime' element= {<OpPatientWaitingTime/>} />
    <Route path = '/outpatientreport' element= {<OutPatientReport/>} />
    <Route path = '/tokendetails' element= {<TokenDetails/>} />

    <Route path = '/visitstatisticsreport' element= {<VisitStatisticsReport/>} />

    <Route path = '/registrationreport' element= {<RegistratiobnReport/>} />
    <Route path = '/newregisteredpatient' element= {<NewRegisteredPatient/>} />
    <Route path = '/patientdemographicreport' element= {<PatientDemographicreport/>} />  
    {/* <Route path = '/labtestwisecountnew' element= {<LabTestwiseCountNew/>} /> */}

  </Routes>
  </BrowserRouter>
  </AuthContextProvider>
    </>
  )
}

export default App
