import React from "react";

const LoginForm = () => {
  return (
    <div>
      <h2>Novell Services Login</h2>
      <form>

        <table>
            <tr>
                <td><label>Username:</label></td>
                <td> <input type="text" /></td>
            </tr>
            <tr>
                <td><label>Password: </label></td>
                <td> <input type="password" /></td>
            </tr>
            <tr>
                <td><label>City of Employment: </label></td>
                <td><input type="text" /></td>
            </tr>
            <tr>
                <td><label>Web server: </label></td>
                <td><select>
                    <option>Choose a server</option>
                    <option>Apache</option>
                    <option>Niginx</option>

                    </select></td>
            </tr>
            <tr>
                <td rowspan="4"> Please specify your role: </td>
                <td><label><input type="radio" name="role" value="admin" /> Admin</label></td>
            </tr>
            <tr>
                <td><label><input type="radio" name="role" value="engineer" /> Engineer</label></td>
            </tr>
            <tr><label><input type="radio" name="role" value="manager" /> Manager</label></tr>
            <tr><label><input type="radio" name="role" value="guest" /> Guest</label><br /></tr>

            <tr>
                <td rowspan="4"> Single Sign-on to the following: </td>
                <td><label><input type="checkbox" /> Mail</label></td>
            </tr>
            <tr>
                <td> <label><input type="checkbox" /> Payroll</label></td>
            </tr>
            <tr><label><input type="checkbox" /> Self-service</label></tr>
        </table>
        <button type="submit" style={{marginLeft:"80px"}}>Login</button>
        <button type="reset" style={{marginLeft:"20px"}}>Reset</button>
      </form>
    </div>
  );
};

export default LoginForm;
