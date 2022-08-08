import axios from "axios";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Input from "./Input";

const GarageSchema = Yup.object().shape({
  garage_name: Yup.string().trim().required(),
  garage_services: Yup.string().trim().required(),
  garage_location: Yup.string().trim().required(),
  garage_description: Yup.string().trim().required(),
  garage_image: Yup.string().trim().required(),
  garage_phone: Yup.string().trim().required(),
  garage_email: Yup.string().trim().required(),
  garage_website: Yup.string().trim().required(),
  time_open: Yup.string().trim().required(),
  time_close: Yup.string().trim().required(),
});

const GarageForm = ({
  initialValues = null,
  redirectParth = "",
  buttonText = "Submit",
  onSubmit = () => null,
}) => {
  const router = useRouter();

  const [counties, setCounty] = React.useState("");
  const { garage_image, ...initialFormValues } = initialValues ?? {
    garage_name: "",
    garage_services: "",
    garage_location: "",
    garage_description: "",
    garage_image: "",
    garage_phone: "",
    garage_email: "",
    garage_website: "",
    time_open: "",
    time_close: "",
  };

  const handleSubmit = () => {};

  useEffect(() => {
    const countyApi = axios
      .get("https://counties-kenya.herokuapp.com/api/v1")
      .then((res) => {
        const countyData = res.data;
        return setCounty(countyData);
      });
  }, [counties]);

  //   console.log(counties);

  return (
    <>
      <Formik
        initialValues={initialFormValues}
        validationSchema={GarageSchema}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <h1 className="text-4xl text-center font-bold tracking-wide mb-3">
              Garage Info
            </h1>

            <div className="space-y-3">
              <Input
                name="garage_name"
                label="Garage Name"
                type="text"
                placeholder="Please enter your garage name"
              />
              <div className="flex space-x-5 items-center">
                <Input
                  name="garage_services"
                  label="Garage Services"
                  type="text"
                  placeholder="Please enter your garage services"
                />
                <button
                  id="dropdownDefault"
                  data-dropdown-toggle="dropdown"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Dropdown button{" "}
                  <svg
                    className="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Input
                name="garage_description"
                label="Garage Description"
                type="text"
                placeholder="Please enter your garage description"
              />
              {/* Garage Image Upload component */}
              <Input
                name="garage_image"
                label="Garage Image"
                type="text"
                placeholder="Please enter your garage image"
              />
              <div className="grid grid-cols-2 ">
                <h1 className="text-2xl font-medium mb-3">Contact Details</h1>
                <div className="flex col-span-2 space-x-3">
                  <Input
                    name="garage_phone"
                    label="Garage Phone"
                    type="phone"
                    placeholder="Please enter your garage phone"
                  />
                  <Input
                    name="garage_email"
                    label="Garage Email"
                    type="text"
                    placeholder="Please enter your garage email"
                  />
                </div>
                <Input
                  name="garage_website"
                  label="Garage Website"
                  type="text"
                  className="col-span-2"
                  placeholder="Please enter your garage website"
                />
              </div>

              <h1 className="text-2xl font-medium mb-3">Working Hours</h1>

              <div className="flex space-x-3 flex-grow">
                <Input
                  name="time_open"
                  label="Time Open"
                  type="time"
                  className="flex-grow"
                />
                <Input
                  name="time_close"
                  label="Time Close"
                  type="time"
                  className="flex-grow"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-6 rounded-md"
                >
                  {isSubmitting ? "Submitting..." : buttonText}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default GarageForm;
