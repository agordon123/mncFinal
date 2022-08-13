import React, { useState, useEffect, useRef } from "react";
import { db, auth, app } from "../../firebase";
import {query,getDocs,collection,onSnapshot,orderBy,} from "firebase/firestore";
import { TableCell, Card, Button, TableRow } from "@mui/material";

// need to display firestore data in a table upon pressing a button;
export const ViewAuditLog = () => {
  const auditLog = collection(db, "auditLog");

  const q = query(auditLog, orderBy("DateTime", "desc"));

  const [data, setData] = useState([]);
  const renderAuditLog = async (e) => {
    const data = await getDocs(db, "auditLog");
    return data.map((doc, id) => {
      return (
        <React.Fragment>
          <Card raised={true} sx={{ maxWidth: "50%" }}>
            <TableRow key={id}>
              <TableCell>{doc.DateTime}</TableCell>
              <TableCell>{doc.UserID}</TableCell>

              <TableCell>{doc.UserName}</TableCell>
              <TableCell>{doc.Action}</TableCell>
              <TableCell>{doc.Description}</TableCell>
            </TableRow>
          </Card>
        </React.Fragment>
      );
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setData(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    return () => unsubscribe();
  });

  return (
    <React.Fragment>
      <Button onClick={() => renderAuditLog()}>Audit Log</Button>
    </React.Fragment>
  );
};

export default ViewAuditLog;
