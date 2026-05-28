import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import DarkModeToogle from "./DarkModeToogle";

export default function HeaderMenu() {
  const StyleHeader = styled.ul`
    display: flex;
    gap: 0.2rem;
  `;

  const navigate = useNavigate();

  return (
    <StyleHeader>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToogle />
      </li>
      <li>
        <Logout />
      </li>
    </StyleHeader>
  );
}
