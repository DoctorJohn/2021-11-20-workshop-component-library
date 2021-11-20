import React from "react";
import { ApplicationPageStep } from "../../components/ApplicationPageStep";
import {
  InputField,
  InputType,
} from "../../../../components/InputField/InputField";
import { Select } from "../../../../components/Select/Select";
import "./ApplicationPageContactDetails.css";

interface ApplicationPageContactDetailsProps {
  handleGoToNextStep: (pageData: unknown) => void;
  handleGoToPreviousStep: () => void;
}

export const ApplicationPageContactDetails = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}: ApplicationPageContactDetailsProps) => {
  // --- YOUR CODE HERE ---

  return (
    <ApplicationPageStep
      pageTitle="Deine Kontaktdaten"
      pageData={{}}
      nextButtonLabel="Weiter"
      handleGoToNextStep={handleGoToNextStep}
      showPreviousPageButton={false}
      handleGoToPreviousStep={handleGoToPreviousStep}
    >
      <div>
        <div className="side-by-side">
          <InputField
            placeholderText="Erika"
            type={InputType.text}
            label="Vorname"
            validation={true}
            validationText=""
          />
          <InputField
            placeholderText="Mustermann"
            type={InputType.text}
            label="Nachname"
            validation={true}
            validationText=""
          />
        </div>
        <br/>
        <InputField
          placeholderText="erika.mustermann@email.de"
          type={InputType.text}
          label="E-Mail"
          validation={true}
          validationText=""
        />
        <br/>
        <InputField
          placeholderText="+49 123 2222 2222"
          type={InputType.text}
          label="Handy"
          validation={true}
          validationText=""
        />
        <br/>
        <Select
          label="Staatsangehoerigkeit"
          options={["Deutsch", "Nicht-Deutsch"]}
          placeholder="Staatsangehoerigkeit"
        />
        <br/>
        <InputField
          placeholderText="Ipfelerstrasse 15, 68789, St.Leon-Rot"
          type={InputType.text}
          label="Adresse"
          validation={true}
          validationText=""
        />
        <br/>
      </div>
    </ApplicationPageStep>
  );
};
