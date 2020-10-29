import React from 'react';
import { PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer'



      const Resume = ()=> {
        return(
          <Document>
          <Page>
             <View>
                <Text>
                   Hallo das ist ein Twst
                </Text>
            </View>
          </Page>
        </Document>
        )
      }

      const Rightsidebar = () =>{
        return (
          <div>
             <PDFDownloadLink document={<Resume />} fileName="resume.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
              </PDFDownloadLink>
          </div>
        );
      }

export default Rightsidebar;
