import React, { useState } from "react";
import { Layout, Image, Input, Button, Form } from "antd";
import "./bookingDetails.css";
import { useLocation } from "react-router-dom";
import senior from "../../assets/images/senior-citizen.png";
import available from "../../assets/images/emptySeat.png";
import selected from "../../assets/images/selected.png";
import booked from "../../assets/images/bookedSeat.png";
import SeatmapDefault from "../../components/Seatmap";

const { Content } = Layout;

function BookingDetails() {
  const location = useLocation();

  // console.log(location);
  const { tripDetails } = location.state;

  // selected seats array filled by clicking seats in seatmap component and passed to api for booking
  // along with passenger details, fare, and contact details
  const [selectedSeats, setSelectedSeats] = useState([]);
  // console.log(selectedSeats);
  // from api get seats already taken
  const [seatsTaken] = useState(["6", "7"]);
  // from api get seats reserved for senior
  const [seniorSeats] = useState(["1", "2", "3", "4"]);

  const [farePerSeat] = useState(633);

  const [contactDetails, setContactDetails] = useState({
    email: "",
    mobileNumber: "",
  });

  // console.log(contactDetails);

  const [passengerDetails, setPassengerDetails] = useState({
    passenger1: "",
    passenger2: "",
    passenger3: "",
    passenger4: "",
    passenger5: "",
  });

  const bookSeat = () => {
    let data = [selectedSeats, contactDetails, passengerDetails];

    console.log(data);
  };

  const passengerNameChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails({
      ...passengerDetails,
      [name]: value,
    });
  };

  return (
    <Layout>
      <Content className="booking-details-container">
        <div className="booking-details-left">
          <div className="legend">
            <div>
              <Image src={senior} alt="" preview={false} />
              Senior
            </div>
            <div>
              <Image src={booked} alt="" preview={false} />
              Seat Taken
            </div>
            <div>
              <Image src={available} alt="" preview={false} />
              Available
            </div>
            <div>
              <Image src={selected} alt="" preview={false} />
              Selected
            </div>
          </div>
          <div className="seat-map">
            <SeatmapDefault
              selectedSeats={selectedSeats}
              setSelectedSeats={setSelectedSeats}
              seatsTaken={seatsTaken}
              seniorSeats={seniorSeats}
            />
          </div>
        </div>
        <div className="booking-details-right">
          <div className="trip-info">
            <h2>Trip Info:</h2>
            <div>
              <span>Trip ID:</span> {tripDetails.tripId}
            </div>
            <div>
              <span>Start Station: </span> {tripDetails.startStation}
            </div>
            <div>
              <span>End Station:</span> {tripDetails.endStation}
            </div>
            <div>
              <span>Travel Date: </span> {tripDetails.startDate}
            </div>
            <div>
              <span>Selected Bus: </span> {tripDetails.selectedBus}
            </div>
            <div>
              <span>Seats Left: </span> {tripDetails.seatsLeft}
            </div>
          </div>
          <div className="ticket-info">
            <h2>Booking Info:</h2>
            <div>
              <span>Fare per Seat: </span> ₱{farePerSeat.toFixed(2)}
            </div>
            <div>
              <span>Selected Seats:</span>{" "}
              {selectedSeats.length > 0
                ? selectedSeats.map((seat, i) => (
                    <span key={i} className="selected-seats">
                      {seat} &nbsp;
                    </span>
                  ))
                : "Select a seat"}
            </div>
            <div>
              <span>No. of Tickets: </span> {selectedSeats.length}
            </div>
            <div>
              <span>Total Fare: </span> ₱{" "}
              {(farePerSeat * selectedSeats.length).toFixed(2)}
            </div>
          </div>
          <Form onFinish={bookSeat}>
            <div className="contact-details">
              <h2>Contact Details:</h2>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "email is required!",
                  },
                ]}
              >
                <Input
                  name="email"
                  placeholder="Customer's Email Address"
                  value={contactDetails.email}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Item>

              <Form.Item
                name="mobileNumber"
                rules={[
                  { required: true, message: "Mobile Number is required!" },
                ]}
              >
                <Input
                  placeholder="Customer's Mobile Number"
                  value={contactDetails.mobileNumber}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      mobileNumber: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </div>
            <div className="passenger-details">
              <h2>Passenger Details:</h2>

              <Form.Item
                name="passenger1"
                rules={[
                  {
                    required: true,
                    message: "Please enter name of passenger!",
                  },
                ]}
              >
                <Input
                  placeholder="Passenger 1 Full Name"
                  name="passenger1"
                  value={passengerDetails.passenger1}
                  onChange={passengerNameChange}
                />
              </Form.Item>
              {selectedSeats.length > 1 && (
                <Form.Item
                  name="passenger2"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name of passenger!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Passenger 2 Full Name"
                    name="passenger2"
                    value={passengerDetails.passenger2}
                    onChange={passengerNameChange}
                  />
                </Form.Item>
              )}
              {selectedSeats.length > 2 && (
                <Form.Item
                  name="passenger3"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name of passenger!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Passenger 3 Full Name"
                    name="passenger3"
                    value={passengerDetails.passenger3}
                    onChange={passengerNameChange}
                  />
                </Form.Item>
              )}
              {selectedSeats.length > 3 && (
                <Form.Item
                  name="passenger4"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name of passenger!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Passenger 4 Full Name"
                    name="passenger4"
                    value={passengerDetails.passenger4}
                    onChange={passengerNameChange}
                  />
                </Form.Item>
              )}
              {selectedSeats.length > 4 && (
                <Form.Item
                  name="passenger5"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name of passenger!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Passenger 5 Full Name"
                    name="passenger5"
                    value={passengerDetails.passenger5}
                    onChange={passengerNameChange}
                  />
                </Form.Item>
              )}
              <Button
                className="book-button"
                htmlType="submit"
                disabled={selectedSeats.length < 1}
              >
                Book
              </Button>
            </div>
          </Form>
        </div>
      </Content>
    </Layout>
  );
}

export default BookingDetails;
