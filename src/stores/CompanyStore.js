import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";

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
      this.setCompany(companyData);

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
      this.setContact(contactData);
    } catch (err) {
      toast.error(err.message || "Failed to fecth data");
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }

  // Update company data via API
  async updateCompany(updatedData) {
    this.setLoading(true);
    this.setError(null);
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
      toast.success("Company data updated");
    } catch (err) {
      this.setError(err.message);
      toast.error(err.message || "Something went wrong");
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
      toast.success("Contacts data updated");
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
      toast.success("Company was successfully deleted");
    } catch (err) {
      this.setError(err.message);
      toast.error(err.message || "Something went wrong");
    } finally {
      this.setLoading(false);
    }
  }

  async uploadPhoto(file) {
    this.setLoading(true);
    this.setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "https://test-task-api.allfuneral.com/companies/12/image",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${this.token}` },
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Failed uploading photo");
      const newPhoto = await response.json();
      this.setCompany({ photos: [...this.company.photos, newPhoto] });
      toast.success("Photo was successfully uploaded");
    } catch (err) {
      this.setError(err.message);
      toast.error(err.message || "Something went wrong");
    } finally {
      this.setLoading(false);
    }
  }

  async deletePhoto(photoName) {
    this.setLoading(true);
    this.setError(null);

    try {
      const response = await fetch(
        `https://test-task-api.allfuneral.com/companies/12/image/${photoName}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed deleting photo");

      const updatedPhotos = this.company.photos.filter(
        (photo) => photo.name !== photoName
      );
      this.setCompany({ photos: updatedPhotos });
      toast.success("Photo was successfully deleted");
    } catch (err) {
      this.setError(err.message);
      toast.error(err.message || "Something went wrong");
    } finally {
      this.setLoading(false);
    }
  }
}

export default new CompanyStore();
