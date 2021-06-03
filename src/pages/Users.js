import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

import Layout from "../components/Layout";
import UsersList from "../components/UsersList";
import InputField from "../components/InputField";
import Content from "../components/Content";

import data from "../data/data.json";

const useStyles = makeStyles({
  contentHeader: {
    padding: 30,
  },
  contentTitle: {
    fontSize: 19,
  },
});

function Users() {
  const classes = useStyles();
  const [gender, setGender] = useState();
  const [nat, setNat] = useState();

  return (
    <Layout title="Users">
      <Content>
        <div
          className={classnames(
            "flex justify-between items-center",
            classes.contentHeader
          )}
        >
          <h3 className={classnames("m-0", classes.contentTitle)}>All users</h3>
          <div>
            <InputField
              type="select"
              placeholder="Gender"
              handleChange={setGender}
              options={data.genderList}
            />
            <InputField
              type="select"
              placeholder="Nationality"
              handleChange={setNat}
              options={data.nationalityList}
              className="ml-1"
            />
          </div>
        </div>
        <UsersList gender={gender} nat={nat} />
      </Content>
    </Layout>
  );
}

export default Users;
