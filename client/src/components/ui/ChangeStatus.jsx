import React from 'react';
import { Dropdown } from 'react-bootstrap';
import axiosInstance from '../../api/axiosInstance';

export default function ChangeStatus({ el, handleChangeStatus }) {
  const statusArr = [
    'techinterview',
    'invited',
    'offer',
    'screening',
    'rejected',
    'videointerview',
    'worked',
  ];
  const filteredStatus = statusArr.filter((stat) => el.status !== stat);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {el.status}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {filteredStatus.map((stat) => (
          <Dropdown.Item
            key={el.id}
            onClick={() => handleChangeStatus(el.id, stat)}
            href="#/action-1"
          >
            {stat}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

