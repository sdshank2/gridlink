import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  fieldLabel: { fontSize: 12, fontWeight: "bold" },
  fieldValue: { fontSize: 12 },
});

const InterconnectionFormPDF = ({ formData }) => {
  return (
    <Document>
      <Page size="letter" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>PJM Small-Generator Interconnection Request</Text>
        </View>

        {Object.entries(formData).map(([key, value]) => (
          <View key={key} style={styles.section}>
            <Text style={styles.fieldLabel}>{key.replace(/([A-Z])/g, " $1").toUpperCase().trim()}:</Text>
            <Text style={styles.fieldValue}>{String(value)}</Text>
          </View>
        ))}
      </Page>
    </Document>
  )
};

export default InterconnectionFormPDF;
