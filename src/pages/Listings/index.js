import React from "react";
import Stack from "@mui/material/Stack";

//Actions Needed to Complete Listing Page
// 1. Get Listing Data
// 2. Get Listing Images
// 3. Display them in appropriate containers
// 4. come up with a system of navigation to cycle through images + also listings

export const ListingPage = ({ type }) => {
  /*
  const user = localStorage.getItem("fbase_key");
  const [documents] = useCollectionData(db, `/listings/${type}/properties`);
  const [listingData, setListingData] = useState({});
  const getData = async () => {
    try {
      const data = await getDocs(db, `/listings/${type}/properties`).then(
        (onSnapshot) => {
          return onSnapshot.docs.map((doc) => doc.data());
        }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  });
  */
  return (
    <Stack>
    </Stack>
  );
};

export default ListingPage;
