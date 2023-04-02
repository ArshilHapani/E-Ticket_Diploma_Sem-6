interface userTableFuncData {
  img: string;
  id: string;
  name: string;
  uname: string;
  email: string;
  mobile: string;
  dob: string;
  balance: number;
}
interface userTableButtonAnnotationTypes {
  row?: userTableFuncData;
  index: number;
  setOpen: Function;
  open: boolean;
  indexMeasure: number;
}

interface userTableDataTypes {
  data: {
    p_img: string;
    p_id: string;
    p_name: string;
    p_uname: string;
    p_email: string;
    p_no: string;
    p_dob: string;
    p_balance: number;
  };
}
interface functionEditUserModelProps {
  setOpen: Function;
  initialValues: {
    name: string;
    email: string;
    uname: string;
    balance: number;
  };
}

export type {
  userTableButtonAnnotationTypes,
  userTableFuncData,
  userTableDataTypes,
  functionEditUserModelProps,
};
