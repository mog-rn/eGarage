import { createTRPCClient } from "@trpc/client";
import { useState } from "react";
import { AppRouter } from "../server/router";
import superjson from "superjson";
import type {Garage, User} from ".prisma/client"

import {createTRPCDataProvider, Resources} from 'ra-trpc/client'
import { Admin, Create, EditGuesser, ListGuesser, Resource, ShowGuesser, SimpleForm, TextInput } from "react-admin";

function AdminComponent() {
  const [trpcClient] = useState(() => {
    createTRPCClient<AppRouter>({
      url: "http://localhost:3000/api/trpc",
      transformer: superjson,
    });
  });

  const resources: Resources<{garage: Garage, user: User}> = {
    garage: { fields: ['title', 'body']},
    user: {fields: ['id', 'name', 'email']}
  }

  const trpcDataProvider = createTRPCDataProvider(trpcClient, resources)

  

  return (
    <Admin dataProvider={trpcDataProvider}>
      <Resource
        name="garage"
        list={ListGuesser}
        show={ShowGuesser}
        edit={EditGuesser}
        create={GarageCreate}
      />
      <Resource 
        name="user"
        list={ListGuesser}
        show={ShowGuesser}
        edit={EditGuesser}
      />
    </Admin>
  );
}

export default AdminComponent;

const GarageCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Create>
  )
}