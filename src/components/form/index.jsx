import React from "react";
import "../../App.css";
import { Modal } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { TiDeleteOutline } from "react-icons/ti";
import { useForm } from "react-hook-form";

const Form = ({ isChange, setIsChange, data }) => {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (d) => {
    setIsChange(!isChange);
    data.push(d);
  };
  return (
    <Modal open={isChange}>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <TiDeleteOutline
          onClick={() => setIsChange(!isChange)}
          style={{ fontSize: "38px", cursor: "pointer" }}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input {...register("id", { required: true })} type="number" />
        <input
          {...register("title", { required: true })}
          placeholder="Enter title of Cards"
          type="text"
        />
        <input
          {...register("imgUrl", { required: true })}
          placeholder="Enter url here"
          type="url"
        />
        <textarea
          {...register("para", { required: true })}
          placeholder="Enter description"
          cols="30"
          rows="10"
        />
        <button type="submit">submit</button>
      </form>
    </Modal>
  );
};

export default Form;
