### 1. Dummy Data Generator API
**Purpose:** Populate MongoDB with random dummy data.

**Routes:**
- `POST /generate` - Creates random users with name, birthday, and city
- `GET /users` - Fetch all dummy users
- `DELETE /users` - Delete all dummy users

**Practice:** Mongoose schemas, insertMany, deleteMany, routing, generating random data