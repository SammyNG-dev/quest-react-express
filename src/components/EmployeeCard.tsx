interface EmployeeCardProps {
    employee: {
      name: {
        first: string;
        last: string;
      };
      email: string;
      picture: {
        medium: string;
      };
    };
  }

function EmployeeCard({employee}: EmployeeCardProps){
    return (
    <>
        <img src={employee.picture.medium} alt="" />
        <figcaption>
            <strong>{employee.name.first} {employee.name.last}</strong>
            {employee.email}
        </figcaption>
    </>
    )
}

export default EmployeeCard