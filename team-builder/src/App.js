import React, {useState} from 'react';
import './App.css';

import Form from "./components/Form";
import FormCard from "./components/FormCard";

function App() {
  const [members, setMembers] = useState([]);

  const submitMember = member => setMembers([...members, member]);

  const update = updatedMember =>
    setMembers([
      ...members.map(member => {
        if (member.id === updatedMember.id) {
          return updatedMember;
        }
        return member;
      })
    ]);
    console.log(`members`, members);

  return (
    <div className="App">
        <Form add={submitMember} />
        {members.map((member, i) => (
          <FormCard member={member} key={i} update={update} />
        ))}
    </div>
  );
}

export default App;
