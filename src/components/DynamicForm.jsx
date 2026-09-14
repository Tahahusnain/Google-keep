import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const DynamicFormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [showSection, setShowSection] = useState(true);

  const schema = yup.object().shape({
    fields: yup.array().of(
      yup.object().shape({
        label: yup.string().required("Field label is required"),
        type: yup.string().required("Field type is required"),
        value: yup.mixed().when("type", {
          is: (type) => type === "text",
          then: yup.string().required("Text is required"),
        }),
        country: yup.mixed().when("type", {
          is: (type) => type === "country",
          then: yup.string().required("Country is required"),
        }),
      })
    ),
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fields: [],
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const addField = (type) => {
    append({
      label: "",
      type: type,
      value: "",
    });
  };

  const handleConditionalLogic = (index) => {
    const value = getValues(`fields.${index}.value`);
    setShowSection(value === "show");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form Builder</h1>

      <div className="flex space-x-2 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => addField("text")}
        >
          Add Text Field
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => addField("dropdown")}
        >
          Add Dropdown
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={() => addField("checkbox")}
        >
          Add Checkbox
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={() => addField("radio")}
        >
          Add Radio Button
        </button>
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded"
          onClick={() => addField("date")}
        >
          Add Date Picker
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => addField("country")}
        >
          Add Country
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="mb-6 p-4 bg-white rounded-md shadow-md"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Field Label
              </label>
              <Controller
                name={`fields.${index}.label`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter field label"
                  />
                )}
              />
              {errors.fields?.[index]?.label && (
                <p className="text-red-500 text-sm">
                  {errors.fields[index].label.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Field Type
              </label>
              <Controller
                name={`fields.${index}.type`}
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border rounded"
                    disabled
                  >
                    <option value={field.type}>{field.type}</option>
                  </select>
                )}
              />
            </div>

            {field.type === "text" && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium ">
                  Text Input
                </label>
                <Controller
                  name={`fields.${index}.value`}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className="w-full px-3 py-2 border rounded"
                      placeholder="Enter text"
                      onBlur={() => handleConditionalLogic(index)}
                    />
                  )}
                />
                {errors.fields?.[index]?.value && (
                  <p className="text-red-500 text-sm">
                    {errors.fields[index].value.message}
                  </p>
                )}
              </div>
            )}

            {field.type === "dropdown" && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Dropdown
                </label>
                <Controller
                  name={`fields.${index}.value`}
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-3 py-2 border rounded"
                      onBlur={() => handleConditionalLogic(index)}
                    >
                      <option value="">Select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="show">Show Section</option>
                    </select>
                  )}
                />
                {errors.fields?.[index]?.value && (
                  <p className="text-red-500 text-sm">
                    {errors.fields[index].value.message}
                  </p>
                )}
              </div>
            )}

            <button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => remove(index)}
            >
              Remove Field
            </button>
          </div>
        ))}

        {showSection && (
          <div className="p-4 bg-gray-200 rounded-md">
            <h3 className="text-lg font-bold mb-4">Conditional Section</h3>
            <p>This section is shown based on the conditional logic.</p>
          </div>
        )}

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicFormBuilder;
