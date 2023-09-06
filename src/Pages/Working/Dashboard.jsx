import { useEffect, useState } from 'react';
const Dashboard = () => {

    const [record, setRecord] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposne => resposne.json())
            .then(res => setRecord(res))
    }

    useEffect(() => {
        getData();
    },)
    return (
        <div class="col main pt-5 mt-3">
            <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">Close</span>
                </button>
                <strong>Data and Records</strong> Learn more about employee
            </div>
            <div class="row ">
                <div class="col-lg-7 col-md-6 col-sm-12">
                    <h5 class="mt-3 mb-3 text-secondary">
                        Check More Records of Employees
                    </h5>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead class="thead-light">
                                <tr>
                                    <th>No</th>
                                    <th>Label</th>
                                    <th>Header</th>
                                    <th>Column</th>
                                    <th>Record Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.slice(0, 5).map((output) =>
                                    <tr>
                                        <td>{output.id}</td>
                                        <td>{output.name}</td>
                                        <td>{output.email}</td>
                                        <td>{output.username}</td>
                                        <td>{output.website}</td>
                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;