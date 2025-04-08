import { makeAutoObservable } from "mobx";

class CompanyStore {
  company = {
    id: "",
    contactId: "",
    name: "",
    shortName: "",
    businessEntity: "",
    contract: {
      no: "",
      issue_date: "",
    },
    type: [],
    status: "",
    photos: [],
    createdAt: "",
    updatedAt: "",
  };

  contact = {
    id: "",
    lastname: "",
    firstname: "",
    phone: "",
    email: "",
    createdAt: "",
    updatedAt: "",
  };

  token = "";

  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Set the token after authentication
  setToken(token) {
    this.token = token;
  }

  setCompany(data) {
    this.company = { ...this.company, ...data };
  }

  setContact(data) {
    this.contact = { ...this.contact, ...data };
  }

  setLoading(loading) {
    this.loading = loading;
  }

  setError(error) {
    this.error = error;
  }

  // Fetch company and contact data from API
  async fetchData() {
    this.setLoading(true);
    this.setError(null);

    try {
      // Authentication
      const authResponse = await fetch(
        "https://test-task-api.allfuneral.com/auth?user=USERNAME"
      );
      const token = authResponse.headers.get("Authorization")?.replace("Bearer ", "");
      if (!token) throw new Error("Authentication failed");
      this.setToken(token);

      // Fetch company data
      const companyResponse = await fetch(
        "https://test-task-api.allfuneral.com/companies/12",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!companyResponse) throw new Error("Failed to fetch company data");
      const companyData = await companyResponse.json();
      console.log("Company API:", companyData);
      this.setCompany(companyData);
      console.log("Company after setCompany:", JSON.stringify(this.company, null, 2));

      // Fetch contact data
      const contactResponse = await fetch(
        "https://test-task-api.allfuneral.com/contacts/16",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!contactResponse.ok) throw new Error("Failed to fetch contact data");
      const contactData = await contactResponse.json();
      console.log("Contact API:", contactData);
      this.setContact(contactData);
      console.log("Contact after setContact:", JSON.stringify(this.contact, null, 2));
    } catch (err) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }

  // Update company data via API
  async updateCompany(updatedData) {
    this.setLoading(true);
    this.setError(null);
    console.log(updatedData);
    try {
      const response = await fetch("https://test-task-api.allfuneral.com/companies/12", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error("Failed to update company data");
      const data = await response.json();
      this.setCompany(data);
    } catch (err) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }

  // Update contact data via API
  async updateContact(updatedData) {
    this.setLoading(true);
    this.setError(null);

    try {
      const response = await fetch("https://test-task-api.allfuneral.com/contacts/16", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error("Failed to update contact data");
      const data = await response.json();
      this.setContact(data);
    } catch (err) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }

  async deleteCompany() {
    this.setLoading(true);
    this.setError(null);

    try {
      const response = await fetch("https://test-task-api.allfuneral.com/companies/12", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete company");

      // Reset the company data after deletion
      this.setCompany({
        id: "",
        contactId: "",
        name: "",
        shortName: "",
        businessEntity: "",
        contract: {
          no: "",
          issue_date: "",
        },
        type: [],
        status: "",
        photos: [],
        createdAt: "",
        updatedAt: "",
      });

      this.setContact({
        id: "",
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      });
    } catch (err) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }
}

export default new CompanyStore();
