export interface RoleProps {
  id?: string;
  name: string;
  description: string;
  isSystemRole: boolean;
}

export class Role {
  constructor(private props: RoleProps) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get isSystemRole() {
    return this.props.isSystemRole;
  }
}
