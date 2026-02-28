CREATE TABLE equipment_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type_id INT REFERENCES equipment_types(id),
    status VARCHAR(20) CHECK (status IN ('Active', 'Inactive', 'Under Maintenance')),
    last_cleaned_date DATE NOT NULL
);

CREATE TABLE maintenance_logs (
    id SERIAL PRIMARY KEY,
    equipment_id INT REFERENCES equipment(id) ON DELETE CASCADE,
    maintenance_date DATE NOT NULL,
    notes TEXT,
    performed_by VARCHAR(100)
);

-- Seed some initial types
INSERT INTO equipment_types (name) VALUES ('Centrifuge'), ('Microscope'), ('Incubator');