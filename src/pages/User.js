import Content from "../components/Content";
import Layout from "../components/Layout";
import UsersList from "../components/UsersList";
import UserView from "../components/UserView";

function User() {
  return (
    <Layout title="User">
      <Content>
        <UsersList />
        <UserView />
      </Content>
    </Layout>
  );
}

export default User;
