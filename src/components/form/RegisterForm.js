import { useState } from "react";
import showPassword from '../../assets/images/password-eye-active.svg';
import hidePassword from '../../assets/images/password-eye-inactive.svg';

function RegisterForm() {
    const [accountInfo, setAccountInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        region: "",
        password: "",
        confirmPassword: "",
        role: "",
        practice: ""
    });
    const [sectors, setSectors] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "sector") {
            if (sectors.includes(value)) {
                const updatedSectors = sectors.filter(sector => {
                    return sector !== value;
                })
                setSectors(updatedSectors);
            } else if (sectors.length === 3) {
                return;
            } else {
                setSectors(sectors => [...sectors, value]);
            }
        } else {
            setAccountInfo((prevState) => ({
                prevState,
                [name]: value
            }));
        }
    };

    const togglePasswordShown = () => {
        setPasswordShown(!passwordShown);
    };

    const removeSector = (e) => {
        e.preventDefault();
        const updatedSectors = sectors.filter(sector => {
            return sector !== e.target.innerText;
        })
        setSectors(updatedSectors);
    };

    const handleFormSubmit = (e) => {
        alert("Form is submitted");

        // Commented out the below code so that the submit button would simulate the form data being sent to the backend

        // const newUser = {
        //     firstName: accountInfo.firstName,
        //     lastName: accountInfo.lastName,
        //     email: accountInfo.email,
        //     region: accountInfo.region,
        //     sector: sectors
        //     password: accountInfo.password,
        //     role: accountInfo.role,
        //     practice: accountInfo.practice
        // }

        // axios
        //     .post('endpointUrl', newUser)
        //     .then((res) => { 
        //         // navigate to next page from here
        //     })
        //     .catch(err => console.log(err));
    };

    return (
        <section>
            <form className="register" onSubmit={handleFormSubmit}>
                <legend className="register__heading">Fill personal information</legend>
                <div className="register__fields-row">
                    <div className="register__field-group register__field-group--grow">
                        <label className="register__label">First Name</label>
                        <input
                            className={"register__input"}
                            type="text"
                            placeholder="User's first name"
                            name="firstName"
                            value={accountInfo.firstName}
                            onChange={handleInputChange}
                        />
                        <p className="register__caption">Required Field</p>
                    </div>
                    <div className="register__field-group register__field-group--grow">
                        <label className="register__label">Last Name</label>
                        <input
                            className="register__input"
                            type="text"
                            placeholder="User's last name"
                            name="lastName"
                            value={accountInfo.lastName}
                            onChange={handleInputChange}
                        />
                        <p className="register__caption">Required Field</p>
                    </div>
                </div>
                <div className="register__fields-row">
                    <div className="register__field-group register__field-group--grow">
                        <label className="register__label">Email</label>
                        <input
                            className="register__input"
                            type="email"
                            placeholder="Will be used to log in"
                            name="email"
                            value={accountInfo.email}
                            onChange={handleInputChange}
                        />
                        <p className="register__caption">Required Field</p>
                    </div>
                    <div className="register__field-group">
                        <label className="register__label">Region</label>
                        <select
                            className="register__input"
                            name="region"
                            value={accountInfo.region}
                            onChange={handleInputChange}
                        >
                            <option selected disabled value="">----</option>
                            <option value="Canada">Canada</option>
                            <option value="United States">United States</option>
                        </select>
                        <p className="register__caption">Required Field</p>
                    </div>
                </div>
                <div className="register__field-group">
                    <legend className="register__heading">Select your Sector</legend>
                    <select
                        className="register__input"
                        name="sector"
                        value={sectors[sectors.length - 1]}
                        onChange={handleInputChange}
                    >
                        <option
                            value="" selected disabled hidden>Select...</option>
                        <option value="PE & VC">PE & VC</option>
                        <option value="LifeSciences & Biotech">LifeSciences & Biotech</option>
                        <option value="Energy">Energy</option>
                        <option value="Technology & Telecommunications">Technology & Telecommunications</option>
                    </select>

                </div>
                <div className="register__sectors">
                    {
                        sectors.length > 0 ? sectors.map((sector) => {
                            return (
                                <div
                                    key={`${sector}`}
                                    className="register__sector"
                                    onClick={removeSector}
                                >
                                    {sector}
                                </div>);
                        })
                            :
                            <p className="register__sector--none">No Sectors Selected</p>
                    }
                </div>
                <div className="register__field-group register__field-group--password">
                    <label className="register__label">Password</label>
                    <span className="register__span">
                        <input
                            className="register__input register__input--password"
                            type={passwordShown ? "text" : "password"}
                            placeholder="use a combination of letters and numbers"
                            name="password"
                            value={accountInfo.password}
                            onChange={handleInputChange}
                        />
                        <img
                            className="register__password-icon"
                            src={passwordShown ? showPassword : hidePassword}
                            alt={passwordShown ? "Show password icon" : "Hide password icon"}
                            onClick={togglePasswordShown}
                        />
                    </span>
                    <p className="register__caption">Must have at least 8 characters</p>
                </div>
                <div className="register__field-group">
                    <label className="register__label">Confirm Password</label>
                    <input
                        className="register__input"
                        type="password"
                        placholder="Use the same as above"
                        name="confirmPassword"
                        value={accountInfo.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <p className="register__caption">Must match password</p>
                </div>
                <div className="register__field-group">
                    <label className="register__label">Role</label>
                    <select
                        className="register__input"
                        name="role"
                        value={accountInfo.role}
                        onChange={handleInputChange}
                    >
                        <option value="firmLeader">Firm Leader</option>
                        <option value="lawyerAssociate">Lawyer - Associate</option>
                        <option value="lawyerLead">Lawyer - Parter/Sector Lead</option>
                        <option value="businessDevelopment">Business Development</option>
                        <option value="businessIntelligence">Business Intelligence - Knowledge Management</option>
                        <option value="other">Other or N/A</option>
                    </select>
                </div>
                <div className="register__field-group">
                    <label className="register__label">Practice Area</label>
                    <select
                        className="register__input"
                        name="practice"
                        value={accountInfo.practice}
                        onChange={handleInputChange}
                    >
                        <option value="tax">Tax</option>
                        <option value="regulation">Antitrust/Competition/Regulation</option>
                        <option value="bankruptcy">Bankruptcy and Restructuring</option>
                        <option value="employment">Labor and Employment</option>
                        <option value="intellectualProperty">Intellectual Property</option>
                        <option value="securities">Securities & Captial Markets</option>
                        <option value="corporateCommercial">Corporate & Commercial</option>
                        <option value="litigation">Litigation</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Create Account"
                    className="register__button"
                />
            </form>
        </section>
    )
}

export default RegisterForm;