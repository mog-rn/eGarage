import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
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

  const { image, ...initialFormValues } = initialValues ?? {
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
            <div className="space-y-3">
              <Input
                name="garage_name"
                label="Garage Name"
                type="text"
                placeholder="Please enter your garage name"
              />
              <div className="flex space-x-5">
                <Input
                  name="garage_services"
                  label="Garage Services"
                  type="text"
                  placeholder="Please enter your garage services"
                />
                <select name="" id="" className=""></select>
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
                <h1>Contact Details</h1>
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
              <div className="flex space-x-3">
                <Input name="time_open" label="Time Open" type="time" />
                <Input name="time_close" label="Time Close" type="time" />
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
