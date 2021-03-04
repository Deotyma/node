const StudentsList = (props) => {
  return (
    <>
      <h1>Liste de mes étudiants:</h1>
      {props.students.map((student) => {
        return (
          <>
            <h2>{student.name}</h2>
          </>
        );
      })}
    </>
  );
};

export default StudentsList;
