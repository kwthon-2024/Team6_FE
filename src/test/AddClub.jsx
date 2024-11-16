import { useState, useRef } from "react";
import axios from "axios";

const AddClub = () => {
  const [area, setArea] = useState("");
  const [clubName, setClubName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [joinable, setJoinable] = useState("");
  const [members, setMembers] = useState(0);
  const imageLogoRef = useRef(null);
  const imageClubRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get file objects from refs
    const imageLogoFile = imageLogoRef.current.files[0];
    const imageClubFile = imageClubRef.current.files[0];

    try {
      // Get Pre-signed URL for image_logo
      const logoUrlResponse = await axios.post("http://112.152.14.116:1116/add-club", {});
      const logoPresignedUrl = logoUrlResponse.data.url;

      // Upload image_logo
      await axios.put(logoPresignedUrl, imageLogoFile, {
        headers: {
          "Content-Type": imageLogoFile.type,
        },
      });
      const imageLogoUrl = logoPresignedUrl.split("?")[0];

      // Get Pre-signed URL for image_club
      const clubUrlResponse = await axios.post("http://112.152.14.116:1116/add-club", {});
      const clubPresignedUrl = clubUrlResponse.data.url;

      // Upload image_club
      await axios.put(clubPresignedUrl, imageClubFile, {
        headers: {
          "Content-Type": imageClubFile.type,
        },
      });
      const imageClubUrl = clubPresignedUrl.split("?")[0];

      // Prepare data to send to the server
      const data = {
        area,
        club_name: clubName,
        instagram,
        image_logo: imageLogoUrl,
        joinable,
        members,
        image_club: imageClubUrl,
      };

      // Send POST request to the server
      await axios.post("http://112.152.14.116:1116/add-club", data);
      alert("Club added successfully!");
    } catch (error) {
      alert("An error occurred while adding the club.");
      console.error(error);
    }
  };

  return (
    <>
      <h1>Add Club</h1>
      <form id="addClubForm" onSubmit={handleSubmit}>
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          name="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="club_name">Club Name:</label>
        <input
          type="text"
          id="club_name"
          name="club_name"
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="instagram">Instagram:</label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="image_logo">Image Logo:</label>
        <input
          type="file"
          id="image_logo"
          name="image_logo"
          accept="image/*"
          ref={imageLogoRef}
          required
        />
        <br />
        <br />

        <label htmlFor="joinable">Joinable:</label>
        <input
          type="text"
          id="joinable"
          name="joinable"
          value={joinable}
          onChange={(e) => setJoinable(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="members">Members:</label>
        <input
          type="number"
          id="members"
          name="members"
          value={members}
          onChange={(e) => setMembers(parseInt(e.target.value, 10))}
          required
        />
        <br />
        <br />

        <label htmlFor="image_club">Image Club:</label>
        <input
          type="file"
          id="image_club"
          name="image_club"
          accept="image/*"
          ref={imageClubRef}
          required
        />
        <br />
        <br />

        <button type="submit">Add Club</button>
      </form>
    </>
  );
};

export default AddClub;
