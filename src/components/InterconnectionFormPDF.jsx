import React from "react";
import { Font, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
//Copy this pdf: https://www.firstenergycorp.com/content/dam/feconnect/files/retail/nj/NJ-Level-1-Interconnection-Application-Agreement.pdf

Font.register({
    family: 'Arial',
    src: "../assets/arial-font/arial.ttf"
});

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 15, fontWeight: "bold", marginTop: 10, textAlign: 'center' },
  subtitle: { fontSize: 12, fontWeight: "bold", textAlign: 'center' },
  subtitle2: { fontSize: 10.5, fontWeight: "bold", textAlign: 'center' },
  subheading1: { fontSize: 10.5, fontStyle: "italic", marginTop: 5, textAlign: 'center' },
  section1: { fontSize: 10.5, fontWeight: "bold", textDecoration: "underline", marginTop: 5, textAlign: 'left', marginBottom: 5},
  section1_1: { fontSize: 10.5, fontWeight: "normal", textDecoration: "underline", marginTop: 5, textAlign: 'left' },
  fieldLabel: { fontSize: 12, fontWeight: "normal" },
  fieldValue: { fontSize: 12, textDecoration: "underline" },
});

const InterconnectionFormPDF = ({ formData }) => {
  return (
    <Document>
      <Page size="letter" style={styles.page}>
          <Text style={styles.title}>JCP&L INTERCONNECTION APPLICATION/AGREEMENT - PART 1</Text>
          <Text style={styles.subtitle}>With Terms and Conditions for Interconnection</Text>
          <Text style={styles.subtitle}>For a Level 1 Review (Certified Inverter-based Units of 10kW and under)</Text>
          <Text style={styles.subheading1}>(Application & Conditional Agreement – to be filled out prior to installation) *Indicates required field</Text>
          <Text style={styles.section1}>
              Legal Name and Mailing Address of Customer-Generator:{" "}
              <Text style={{ fontWeight: "normal"}}>
                  (if an Individual, Individual’s Name)
              </Text>
          </Text>


          <Text style={styles.section}>
              <Text style={styles.fieldLabel}>*Name:{" "}</Text>
              <Text style={styles.fieldValue}>{formData.name}</Text>
          </Text>

          <Text style={styles.section}>
              <Text style={styles.fieldLabel}>*Title:</Text>
              <Text style={styles.fieldValue}>{formData.title}</Text>
          </Text>

          <Text style={styles.section}>
              <Text style={styles.fieldLabel}>*Mailing Address:</Text>
              <Text style={styles.fieldValue}>{formData.mailingAddress}</Text>
          </Text>

          <Text style={styles.section}>
              <Text style={styles.fieldLabel}>Telephone (Daytime):</Text>
              <Text style={styles.fieldValue}>{formData.phoneNumber}</Text>
          </Text>

          <Text style={styles.section}>
              <Text style={styles.fieldLabel}>Email Address:</Text>
              <Text style={styles.fieldValue}>{formData.email}</Text>
          </Text>

          <Text style={styles.section}>
              <Text style={styles.fieldLabel}>
                  <Text>*City: </Text>
                  <Text style={styles.fieldValue}>_______________________________ </Text>
                  <Text>*State: </Text>
                  <Text style={styles.fieldValue}>_____ </Text>
                  <Text>*Zip Code: </Text>
                  <Text style={styles.fieldValue}>____________</Text>
              </Text>
          </Text>
      </Page>

      <Page size="letter" style={styles.page}>
      </Page>

      <Page size="letter" style={styles.page}>
      </Page>

      <Page size="letter" style={styles.page}>
      </Page>

      <Page size="letter" style={styles.page}>
      </Page>

      <Page size="letter" style={styles.page}>
      </Page>

      <Page size="letter" style={styles.page}>
      </Page>

      <Page size="letter" style={styles.page}>
      </Page>
    </Document>
  )
};

export default InterconnectionFormPDF;
