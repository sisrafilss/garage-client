import ModalContainer from "../../Modal/ModalContainer";
import ButtonAdd from "../Buttons/ButtonAdd";
import ButtonRegularGreen from "../Buttons/ButtonRegularGreen";
import Input from "../Form/Input";
import TextArea from "../Form/TextArea";
import HeadingH3 from "../Headings/HeadingH3";
import HeadingH5 from "../Headings/HeadingH5";

const ModalForm = ({ title, openModal, closeModal, isOpen }) => {
  return (
    <ModalContainer
      className="space-y-4"
      openModal={openModal}
      closeModal={closeModal}
      isOpen={isOpen}
    >
      <HeadingH3>{title}</HeadingH3>
      <form className="space-y-6">
        <div className="space-y-4">
          <Input label="Title" placeholder="Service title" type="text" />
          <div className="flex justify-between space-x-6">
            <Input label="Price" placeholder="Regular Price" type="number" />
            <Input
              label="Discount Price"
              placeholder="Discount Price"
              type="number"
            />
          </div>
          <Input label="Title" placeholder="Service title" type="text" />
          <TextArea
            label="Descrioption"
            placeholder="Enter short description"
          />
          <Input label="Upload Feature Image" type="file" />
        </div>
        <hr />
        <div className="space-y-4">
          <HeadingH5 className="text-center">Features</HeadingH5>
          <Input
            label="Feature Title"
            placeholder="Bullet Point Description"
            type="text"
          />
          <TextArea
            label="Descrioption"
            placeholder="Enter detail description about this repair service. Each sentence will show as a bullent point"
          />
          <ButtonAdd className="bg-gray-200 mx-auto font-normal">
            Add Another Feature
          </ButtonAdd>
        </div>
        <hr />
        <div className="space-y-4">
          <HeadingH5 className="text-center">FAQs</HeadingH5>
          <Input label="Question" placeholder="Enter answer" type="text" />
          <TextArea label="Answer" placeholder="Answer to the Question" />
          <ButtonAdd className="bg-gray-300 mx-auto font-normal">
            Add Another FAQ
          </ButtonAdd>
        </div>
        <hr />

        <ButtonRegularGreen className="w-full">Submit</ButtonRegularGreen>
      </form>
    </ModalContainer>
  );
};

export default ModalForm;
