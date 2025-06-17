import {useState} from "react";

const users = [
    {id: 1, name: 'John Doe', email: 'john.doe@example.com'},
    {id: 2, name: 'Jane Smith', email: 'jane.smith@example.com'},
    {id: 3, name: 'Jack Johnson', email: 'jack.johnson@example.com'},
    {id: 4, name: 'Alice Brown', email: 'alice.brown@example.com'}
];

export const UserList = () => {
    const [inputValue, setInputValue] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleInput = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setFilteredUsers(
            users.filter(item =>
                item.name.toLowerCase().startsWith(value.toLowerCase())
            )
        );
    };

    return (
        <>
            <input type="text" value={inputValue} onChange={handleInput} />
            {filteredUsers.map(user => (
                <ListItem
                    key={user.id}
                    name={user.name}
                    email={user.email}
                />
            ))}
        </>
    );

}

const ListItem = ({name, email}) => {
    return (
        <>
            <span> {name} {email} |</span>
        </>
    );
}