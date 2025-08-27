import { useState } from "react";
import { type RecipientFormData } from "@/lib/validations";
import { User, Phone, Mail, Hash } from "lucide-react";

interface UserListProps {
  users: RecipientFormData[];
  addUser: (user: RecipientFormData) => void;
  // removeUser: (userId: string) => void;
  label: string;
}

export const UserList = ({ users, addUser, label }: UserListProps) => {
  const [selectedUser, setSelectedUser] = useState<RecipientFormData[]>([]);

  if (users.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <User className="w-12 h-12 mx-auto mb-3 text-gray-300" />
        <p>No {label} added yet</p>
      </div>
    );
  }

  const toggleUserSelection = (name: string) => {
    if (selectedUser.find((u) => u.name === name) !== undefined) {
      setSelectedUser(selectedUser.filter((u) => u.name !== name));
    } else {
      const user = users.find((u) => u.name === name);
      if (user) {
        setSelectedUser([...selectedUser, user]);
      }
    }
  };

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-gray-800 mb-3">
        {label} ({users.length})
      </h4>
      {users.map((user, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={
              selectedUser.find((u) => u.name === user.name) !== undefined
            }
            onChange={() => toggleUserSelection(user.name)}
            name={user.name}
          />
          <label htmlFor={user.name}>
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative"
            >
              <div className="pr-8">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="font-medium text-gray-800">{user.name}</span>
                  {/* <span className="text-sm text-gray-500">({user.age} years old)</span> */}
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-3 h-3" />
                    <span>{user.contact_number_1}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-3 h-3" />
                    <span>{user.contact_number_2}</span>
                  </div>

                  {user.email && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="w-3 h-3" />
                      <span>{user.email}</span>
                    </div>
                  )}

                  {user.socialMedia && user.socialMedia.length > 0 && (
                    <div className="space-y-1">
                      {user.socialMedia.map((social, socialIndex) => (
                        <div
                          key={socialIndex}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <Hash className="w-3 h-3" />
                          <span>
                            {social.platform}: {social.handle}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};
