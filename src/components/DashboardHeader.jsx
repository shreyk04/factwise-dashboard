import React from "react";

const DashboardHeader = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>FactWise Employee Dashboard</h1>
            <p style={styles.subtitle}>AG Grid Data Table Example</p>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: "#007BFF",
        color: "white",
        padding: "16px 24px",
    },
    title: {
        margin: 0,
        fontSize: "22px",
    },
    subtitle: {
        margin: "4px 0 0",
        fontSize: "14px",
        opacity: 0.9,
    },
};

export default DashboardHeader;
