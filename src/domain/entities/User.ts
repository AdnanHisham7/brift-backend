export interface UserProps {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: string;
}

export class User {
  constructor(private props: UserProps) {}

  get id() {
    return this.props.id;
  }

  get firstName() {
    return this.props.firstName;
  }

  get lastName() {
    return this.props.lastName;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get roleId() {
    return this.props.roleId;
  }
}
