import { TableColumnsType } from "ant-design-vue";

const AppMasterTableColumns: TableColumnsType = [
    { title: 'Program', dataIndex: 'program', key: '1', width: 150, fixed: 'left' },
    { title: 'Year', width: 100, dataIndex: 'admissionYear', key: 'year' },
    { title: 'Semester', width: 100, dataIndex: 'admissionSemName', key: 'semester' },
    { title: 'Open Date', dataIndex: 'openDate', key: 'openDate', width: 150 },
    { title: 'Close Date', dataIndex: 'closeDate', key: 'closeDate', width: 150 },
    { title: 'Test No', dataIndex: 'testNO', key: 'testNO', width: 150 },
    { title: 'Exam Date', dataIndex: 'examDate', key: 'examDate', width: 150 },
    { title: 'Result Date', dataIndex: 'resultPublishDate', key: 'resultPublishDate', width: 150 },
    { title: 'Open Status', dataIndex: 'openSatus', key: 'openSatus', width: 150 },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
    },
  ];
  const AppApplicantTableColumns: TableColumnsType = [
    { title: 'Program', dataIndex: 'program', key: '1', width: 250, fixed: 'left' },
    { title: 'Year', width: 100, dataIndex: 'admissionYear', key: 'year' },
    { title: 'Semester', width: 100, dataIndex: 'admissionSemName', key: 'semester' },
    { title: 'Applicant Count', dataIndex: 'applicantCount', key: 'applicantCount', width: 150 },
    { title: 'Paid Count', dataIndex: 'paidCount', key: 'paindCount', width: 150 },
  ];

  export {AppMasterTableColumns, AppApplicantTableColumns }