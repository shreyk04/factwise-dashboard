import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeTable = ({ data = [] }) => {
    const columnDefs = useMemo(
        () => [
            { headerName: "ID", field: "id", width: 80 },
            { headerName: "Name", valueGetter: (p) => `${p.data.firstName} ${p.data.lastName}` },
            { headerName: "Department", field: "department" },
            { headerName: "Position", field: "position" },
            { headerName: "Email", field: "email" },
            { headerName: "Salary ($)", field: "salary" },
            { headerName: "Status", field: "isActive", valueFormatter: (p) => (p.value ? "Active" : "Inactive") },
        ],
        []
    );

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        resizable: true,
        flex: 1,
        minWidth: 120,
    }), []);

    return (
        <div style={{ width: "95%", margin: "20px auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Employee Details</h2>
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <AgGridReact
                    rowData={data}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={10}
                />
            </div>
        </div>
    );
};

export default EmployeeTable;
