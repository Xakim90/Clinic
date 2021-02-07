import React from 'react';
import MaterialTable from 'material-table';
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
  state = {
    loading: false
  }

  isLoading (bool) {
    this.setState({loading: bool})
  }
  async rowAdd (newData) {
    this.isLoading(true);
    await this.props.clientPostFetch(newData);
    this.isLoading(false);
  };
  async rowUpdate(newData) {
    this.isLoading(true);
    await this.props.updateClient(newData);
    this.isLoading(false);
  }
  async rowDelete (id) {
    this.isLoading(true);
    await this.props.removeClient(id);
    this.isLoading(false);
  };
  render() {
    return (
      <MaterialTable
        style={{ textTransform: 'none' }}
        isLoading={this.state.loading}
        title="Таблица пациентов"
        data={this.props.clients}
        columns={[
          { title: 'Имя', field: 'name' },
          { title: 'Фамилия', field: 'surname' },
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
        options={{
          selection: true,
        }}
        actions={[
          {
            icon: SaveIcon,
            tooltip: 'Save User',
            onClick: (event, rowData) => alert('You saved ' + rowData.name),
          },
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
              resolve();
              this.rowAdd(newData);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              const dataUpdate = [...this.props.clients];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              resolve();
              this.rowUpdate(newData);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              const dataDelete = [...this.props.clients];
              const index = oldData.tableData.id;
              const _id = oldData._id;
              dataDelete.splice(index, 1);
              resolve();
              this.rowDelete(_id);
            }),
        }}
      />
    );
  }
}

export default TableMaterial;
