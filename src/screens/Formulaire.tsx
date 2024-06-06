import React, { ChangeEvent, FormEvent, useState } from 'react';
import './Formulaire.css';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    linkedIn: string;
    address: string;
    education: string;
    experience: string;
    skills: string;
    certificates: string;
    hobbies: string[];
    about: string;
    languages: string[];
}

interface Errors {
    [key: string]: string;
}

const Formulaire: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedIn: '',
        address: '',
        education: '',
        experience: '',
        skills: '',
        certificates: '',
        hobbies: [],
        about: '',
        languages: []
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            const updatedArray = checked
                ? [...(formData[name as keyof FormData] as string[]), value]
                : (formData[name as keyof FormData] as string[]).filter(
                      (item) => item !== value
                  );
            setFormData({
                ...formData,
                [name]: updatedArray
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const validate = () => {
        const newErrors: Errors = {};
        const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
        const phonePattern = /^[0-9]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.firstName || !namePattern.test(formData.firstName)) {
            newErrors.firstName = 'Prénom invalide (lettres uniquement)';
        }

        if (!formData.lastName || !namePattern.test(formData.lastName)) {
            newErrors.lastName = 'Nom de famille invalide (lettres uniquement)';
        }

        if (!formData.email || !emailPattern.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }

        if (!formData.phone || !phonePattern.test(formData.phone)) {
            newErrors.phone = 'Numéro de téléphone invalide (chiffres uniquement)';
        }

        if (!formData.education) {
            newErrors.education = 'Éducation est obligatoire';
        }

        if (!formData.experience) {
            newErrors.experience = 'Expérience professionnelle est obligatoire';
        }

        if (!formData.skills) {
            newErrors.skills = 'Compétences sont obligatoires';
        }

        if (!formData.address) {
            newErrors.address = 'Adresse est obligatoire';
        }

        if (!formData.linkedIn) {
            newErrors.linkedIn = 'Compte LinkedIn est obligatoire';
        }

        if (!formData.certificates) {
            newErrors.certificates = 'Certificats sont obligatoires';
        }

        if (formData.hobbies.length === 0) {
            newErrors.hobbies = 'Sélectionnez au moins un loisir';
        }

        if (formData.languages.length === 0) {
            newErrors.languages = 'Sélectionnez au moins une langue';
        }

        if (!formData.about) {
            newErrors.about = 'À propos est obligatoire';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data is valid:', formData);
            // Process the form data here
        } else {
            console.log('Form data is invalid:', errors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="cv-form">
            <h2 className="cv-form-title">Formulaire de CV</h2>
            <div className="form-group">
                <label>Prénom:</label>
                <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
                <label>Nom de famille:</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label>Téléphone:</label>
                <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="form-group">
                <label>Adresse:</label>
                <input 
                    type="text" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                />
                {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <div className="form-group">
                <label>Compte LinkedIn:</label>
                <input 
                    type="text" 
                    name="linkedIn" 
                    value={formData.linkedIn} 
                    onChange={handleChange} 
                />
                {errors.linkedIn && <span className="error">{errors.linkedIn}</span>}
            </div>
            <div className="form-group">
                <label>Éducation:</label>
                <textarea 
                    name="education" 
                    value={formData.education} 
                    onChange={handleChange} 
                />
                {errors.education && <span className="error">{errors.education}</span>}
            </div>
            <div className="form-group">
                <label>Expérience Professionnelle:</label>
                <textarea 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleChange} 
                />
                {errors.experience && <span className="error">{errors.experience}</span>}
            </div>
            <div className="form-group">
                <label>Compétences:</label>
                <textarea 
                    name="skills" 
                    value={formData.skills} 
                    onChange={handleChange} 
                />
                {errors.skills && <span className="error">{errors.skills}</span>}
            </div>
            <div className="form-group">
                <label>Certificats:</label>
                <textarea 
                    name="certificates" 
                    value={formData.certificates} 
                    onChange={handleChange} 
                />
                {errors.certificates && <span className="error">{errors.certificates}</span>}
            </div>
            <div className="form-group">
                <label>Loisirs:</label>
                <div className="checkbox-group">
                    <label>
                        <input 
                            type="checkbox" 
                            name="hobbies" 
                            value="Dessin" 
                            checked={formData.hobbies.includes('Dessin')}
                            onChange={handleChange}
                        />
                        Dessin
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="hobbies" 
                            value="Lecture" 
                            checked={formData.hobbies.includes('Lecture')}
                            onChange={handleChange}
                        />
                        Lecture
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="hobbies" 
                            value="Sport" 
                            checked={formData.hobbies.includes('Sport')}
                            onChange={handleChange}
                        />
                        Sport
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="hobbies" 
                            value="Voyage" 
                            checked={formData.hobbies.includes('Voyage')}
                            onChange={handleChange}
                        />
                        Voyage
                    </label>
                </div>
                {errors.hobbies && <span className="error">{errors.hobbies}</span>}
            </div>
            <div className="form-group">
                <label>Langues:</label>
                <div className="checkbox-group">
                    <label>
                        <input 
                            type="checkbox" 
                            name="languages" 
                            value="Arabe" 
                            checked={formData.languages.includes('Arabe')}
                            onChange={handleChange}
                        />
                        Arabe
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="languages" 
                            value="Français" 
                            checked={formData.languages.includes('Français')}
                            onChange={handleChange}
                        />
                        Français
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="languages" 
                            value="Anglais" 
                            checked={formData.languages.includes('Anglais')}
                            onChange={handleChange}
                        />
                        Anglais
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="languages" 
                            value="Espagnol" 
                            checked={formData.languages.includes('Espagnol')}
                            onChange={handleChange}
                        />
                        Espagnol
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="languages" 
                            value="Allemand" 
                            checked={formData.languages.includes('Allemand')}
                            onChange={handleChange}
                        />
                        Allemand
                    </label>
                </div>
                {errors.languages && <span className="error">{errors.languages}</span>}
            </div>
            <div className="form-group">
                <label>À propos:</label>
                <textarea 
                    name="about" 
                    value={formData.about} 
                    onChange={handleChange} 
                />
                {errors.about && <span className="error">{errors.about}</span>}
            </div>
            <button type="submit">Soumettre</button>
        </form>
    );
};

export default Formulaire;