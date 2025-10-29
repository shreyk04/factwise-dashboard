import React from "react";

const SummarySection = ({ employees }) => {
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(emp => emp.isActive).length;
    const avgSalary = (
        employees.reduce((acc, emp) => acc + emp.salary, 0) / totalEmployees
    ).toFixed(2);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h3>Total Employees</h3>
                <p>{totalEmployees}</p>
            </div>
            <div style={styles.card}>
                <h3>Active Employees</h3>
                <p>{activeEmployees}</p>
            </div>
            <div style={styles.card}>
                <h3>Average Salary</h3>
                <p>${avgSalary}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        gap: "20px",
        margin: "20px 0",
    },
    card: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
};

export default SummarySection;
