import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();

  // const [serviceDetails, setServiceDetails] = useState([]);
  // const [selectedService, setSelectedService] = useState([]);

  // useEffect(() => {
  //   fetch("fakeData.json")
  //     .then((res) => res.json())
  //     .then((data) => setServiceDetails(data));
  // }, []);

  // useEffect(() => {
  //   const findServiceDetails = serviceDetails.find(
  //     (service) => service.id === parseInt(serviceId)
  //   );
  //   setSelectedService(findServiceDetails);
  // }, [serviceDetails, serviceId, selectedService]);

  return (
    <Container xs={12} sx={{ my: "300px" }}>
      <h1> Service Details : {serviceId}</h1>
    </Container>
  );
};

export default ServiceDetails;
