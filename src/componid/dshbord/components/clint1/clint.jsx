
import { useState, useEffect } from "react";
import "./clint.css";
import initialClintData from "../../data/Data";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { FaEdit, FaTrash, FaPlus, FaSave } from "react-icons/fa";

const ClintPage = () => {
  const [clints, setClints] = useState([]);
  const [newClint, setNewClint] = useState({ name: "", email: "", dateofbirth: "" });
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editClint, setEditClint] = useState({ name: "", email: "", dateofbirth: "" });
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const storedClints = localStorage.getItem("clintsData");
    if (storedClints) {
      setClints(JSON.parse(storedClints));
    } else {
      setClints(initialClintData);
      localStorage.setItem("clintsData", JSON.stringify(initialClintData));
    }
  }, []);

  const updateLocalStorage = (data) => {
    setClints(data);
    localStorage.setItem("clintsData", JSON.stringify(data));
  };

  const handleEdit = (id) => {
    setEditIndex(id);
    setEditClint(clints[id]);
  };

  const handleSaveEdit = (id) => {
    const updatedClints = clints.map((clint, index) => (index === id ? editClint : clint));
    updateLocalStorage(updatedClints);
    setEditIndex(null);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    const updatedClints = clints.filter((_, index) => index !== deleteId);
    updateLocalStorage(updatedClints);
    setShowModal(false);
    setDeleteId(null);
  };

  const handleAdd = () => {
    setShowForm(true);
  };

  const handleSave = () => {
    if (newClint.name && newClint.email && newClint.dateofbirth) {
      const updatedClints = [...clints, newClint];
      updateLocalStorage(updatedClints);
      setNewClint({ name: "", email: "", dateofbirth: "" });
      setShowForm(false);
    }
  };

  return (
    <div>
      <div className="table-clint m-3 p-3 bg-body rounded-3">
        <div className="d-flex mb-3">
          <button className="btn btn-primary me-3" onClick={handleAdd}>
            <FaPlus /> Add Client
          </button>
        </div>
        {showForm && (
          <div className="mb-3 d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Name"
              value={newClint.name}
              onChange={(e) => setNewClint({ ...newClint, name: e.target.value })}
            />
            <input
              type="email"
              className="form-control me-2"
              placeholder="Email"
              value={newClint.email}
              onChange={(e) => setNewClint({ ...newClint, email: e.target.value })}
            />
            <input
              type="date"
              className="form-control me-2"
              value={newClint.dateofbirth}
              onChange={(e) => setNewClint({ ...newClint, dateofbirth: e.target.value })}
            />
            <button className="btn btn-success" onClick={handleSave}>Save</button>
          </div>
        )}
        <table className="table table-striped">
          <thead>
            <tr>
              <th><BsFillPersonBadgeFill className="text-success mx-1 fs-3" /> Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clints.map((clint, id) => (
              <tr key={id}>
                {editIndex === id ? (
                  <>
                    <td><input type="text" className="form-control" value={editClint.name} onChange={(e) => setEditClint({ ...editClint, name: e.target.value })} /></td>
                    <td><input type="email" className="form-control" value={editClint.email} onChange={(e) => setEditClint({ ...editClint, email: e.target.value })} /></td>
                    <td><input type="date" className="form-control" value={editClint.dateofbirth} onChange={(e) => setEditClint({ ...editClint, dateofbirth: e.target.value })} /></td>
                    <td><button className="btn btn-success btn-sm" onClick={() => handleSaveEdit(id)}><FaSave /></button></td>
                  </>
                ) : (
                  <>
                    <td>{clint.name}</td>
                    <td>{clint.email}</td>
                    <td>{clint.dateofbirth}</td>
                    <td>
                      <button className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(id)}><FaEdit /></button>
                      <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(id)}><FaTrash /></button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay centered">
          <div className="modal-content small-modal">
            <p>Are you sure you want to delete this client?</p>
            <button className="btn btn-danger me-2" onClick={confirmDelete}>Delete</button>
            <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClintPage;
