import { pool } from "../config/database.js";
import bcrypt from "bcryptjs";

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  agreeToTerms: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  // Create a new user
  static async create(userData: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>): Promise<IUser> {
    const { firstName, lastName, email, phone, password, agreeToTerms } = userData;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (firstName, lastName, email, phone, password, agreeToTerms)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;

    const values = [firstName, lastName, email, phone, hashedPassword, agreeToTerms];
    const result = await pool.query(query, values);

    return result.rows[0];
  }

  // Find user by email
  static async findByEmail(email: string): Promise<IUser | null> {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);

    return result.rows[0] || null;
  }

  // Find user by ID
  static async findById(id: number): Promise<IUser | null> {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);

    return result.rows[0] || null;
  }

  // Get all users
  static async findAll(): Promise<IUser[]> {
    const query = 'SELECT * FROM users ORDER BY createdAt DESC';
    const result = await pool.query(query);

    return result.rows;
  }

  // Update user
  static async updateUser(
    id: number,
    updates: Partial<Pick<IUser, 'firstName' | 'lastName' | 'phone'>>
  ): Promise<IUser | null> {
    const { firstName, lastName, phone } = updates;
    const values: (string | number)[] = [];
    const setClauses: string[] = [];

    if (firstName) {
      setClauses.push(`firstName = $${values.length + 1}`);
      values.push(firstName);
    }

    if (lastName) {
      setClauses.push(`lastName = $${values.length + 1}`);
      values.push(lastName);
    }

    if (phone) {
      setClauses.push(`phone = $${values.length + 1}`);
      values.push(phone);
    }

    if (setClauses.length === 0) {
      return null;
    }

    setClauses.push(`updatedAt = CURRENT_TIMESTAMP`);
    values.push(id);

    const query = `
      UPDATE users
      SET ${setClauses.join(', ')}
      WHERE id = $${values.length}
      RETURNING *
    `;

    const result = await pool.query(query, values);

    return result.rows[0] || null;
  }

  // Delete user
  static async deleteUser(id: number): Promise<boolean> {
    const query = 'DELETE FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);

    return (result.rowCount ?? 0) > 0;
  }

  // Compare password
  static async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}

export default User;
