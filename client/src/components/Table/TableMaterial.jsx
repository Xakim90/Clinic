import React from 'react';
import MaterialTable from 'material-table';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CancelIcon from '@material-ui/icons/Cancel';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


class TableMaterial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  rowAdd = () => {
    this.props.clientPostFetch(this.state);
    this.props.getClientsFetch();
  };
  rowUpdate = () => {
    this.props.getClientsFetch();
  };
  rowDelete = () => {
    this.props.getClientsFetch();
  };
  render() {
    return (
          <MaterialTable
            title="Таблица пациентов"
            data={this.props.clients}
            // style={{ display: 'flex' }}
            columns={[
              { title: 'Имя', field: 'name' },
              { title: 'Фамилмя', field: 'surname' },
              { title: 'Статус', field: 'status' },
              { title: 'Год рождения', field: 'birthYear', type: 'numeric' },
              {
                title: 'Место проживания',
                field: 'birthCity',
                lookup: {
                  1: 'Ташкент',
                  10: 'Ташкентская область',
                  20: 'Сырдарьинская область',
                  25: 'Джизакская область',
                  30: 'Самаркандская область',
                  40: 'Ферганская область',
                  50: 'Наманганская область',
                  60: 'Андижанская область',
                  70: 'Кашкадарьинская область',
                  75: 'Сурхандарьинская область',
                  80: 'Бухарская область',
                  85: 'Навоийская область',
                  90: 'Хорезмская область',
                  95: 'Республика Каракалпакстан',
                },
              },
            ]}
            actions={[
              {
                icon: SaveIcon,
                tooltip: 'Save User',
                onClick: (event, rowData) => alert('You saved ' + rowData.name),
              },
              // {
              //   icon: DeleteIcon,
              //   tooltip: 'Delete User',
              //   onClick: (event, rowData) =>
              //     window.confirm('You want to delete ' + rowData.name),
              // },
            ]}
            icons={{
              Search: SearchIcon,
              ResetSearch: ClearIcon,
              Edit: EditIcon,
              Delete: DeleteForeverIcon,
              Save: SaveIcon,
              Cancel: CancelIcon,
              Check: CheckBoxIcon,
              Clear: ClearIcon,
              FirstPage: FirstPageIcon,
              LastPage: LastPageIcon,
              PreviousPage: ChevronLeftIcon,
              NextPage: ChevronRightIcon,
              Add: AddBoxIcon,
              SortArrow: ArrowUpwardIcon,
            }}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    this.setState(newData);
                    resolve();
                    this.rowAdd();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...this.props.clients];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
                    resolve();
                    this.rowUpdate();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...this.props.clients];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    this.setState([...dataDelete]);
                    resolve();
                    this.rowDelete();
                  }, 1000);
                }),
            }}
          />
    );
  }
}


export default TableMaterial;
