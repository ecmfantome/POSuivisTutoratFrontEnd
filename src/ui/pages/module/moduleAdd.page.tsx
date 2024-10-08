import React from "react";
import IModule from "../../../models/Module.model";
import ModuleFormComponent from "../../components/module/moduleForm.component";
import { useNavigate } from "react-router-dom";
import { RoutesName } from "../../../services/Helpers.service";
import { addModuleApi } from "../../../restApi/Module.api";
import { Stack } from "@mui/material";

interface ModuleAddPageProps {}

const ModuleAddPage: React.FC<ModuleAddPageProps> = () => {
  const navigate = useNavigate();

  const onNav = (path: string) => {
    navigate(path);
  };

  let module: IModule = {
    nom: "",
    heure: 0,
    semaine: 0,
  };

  const onSubmit = async (moduleInput: IModule) => {
    //add and nav
    const idModule = await addModuleApi(moduleInput);
    if (idModule) onNav(`${RoutesName.module.moduleDetails}/${idModule}`);
  };

  return (
    <>
      <Stack style={{ position : 'relative', left : '130px' }}>
        <ModuleFormComponent onSubmit={onSubmit} module={module} />
      </Stack>

    </>
  );
};

export default ModuleAddPage;
