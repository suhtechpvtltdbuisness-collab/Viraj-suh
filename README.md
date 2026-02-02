# Viraj Jewellers - Gold Trading Platform

A comprehensive gold trading platform built with Next.js, featuring gold checking, selling, loan calculations, and customer management.

## 🚀 Features

### Core Functionality
- **Gold Purity Testing & Valuation** - Check gold purity and get market value
- **Gold Selling Platform** - Submit gold for selling with customer details
- **Loan Calculator** - Calculate gold-backed loans with EMI
- **Customer Management** - Track all customer interactions and transactions
- **Dashboard** - Admin panel for managing all business operations

### Technical Features
- **RESTful APIs** - Complete backend API for all operations
- **Real-time Calculations** - Instant gold value and loan calculations
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Type Safety** - Full TypeScript implementation
- **Modern UI Components** - Built with Radix UI and shadcn/ui

## 🏗️ Architecture

```
Viraj/
├── app/                    # Next.js 13 App Router
│   ├── api/               # API Routes
│   │   ├── gold-check/    # Gold testing API
│   │   ├── gold-sell/     # Gold selling API
│   │   ├── loan-calculator/ # Loan calculation API
│   │   └── contact/       # Contact form API
│   ├── dashboard/         # Admin dashboard
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── sections/          # Page sections
│   └── ui/               # Reusable UI components
└── lib/                  # Utility functions
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner toast notifications

## 📱 Pages & Components

### Main Website
1. **Hero Section** - Landing page with call-to-action
2. **Gold Check** - Gold purity testing and valuation
3. **Loan Calculator** - Gold-backed loan calculations
4. **Sell Gold** - Gold selling submission form
5. **Services** - Available services overview
6. **About** - Company information
7. **Testimonials** - Customer reviews
8. **Contact** - Contact form and information
9. **Footer** - Links and company details

### Dashboard
1. **Overview** - Statistics and recent transactions
2. **Gold Checks** - Manage gold testing requests
3. **Gold Sales** - Track gold selling transactions
4. **Loans** - Monitor loan applications
5. **Contacts** - Customer inquiries management
6. **Analytics** - Business insights and reports

## 🔌 API Endpoints

### Gold Check API
```http
POST /api/gold-check
{
  "goldType": "22k",
  "weight": 10.5,
  "purity": 91.7,
  "currentPrice": 65000
}
```

### Gold Sell API
```http
POST /api/gold-sell
{
  "customerName": "John Doe",
  "customerPhone": "+91-9876543210",
  "goldType": "18k",
  "weight": 8.2,
  "purity": 75.0,
  "currentPrice": 65000,
  "sellingPrice": 85000
}
```

### Loan Calculator API
```http
POST /api/loan-calculator
{
  "goldWeight": 15.0,
  "goldPurity": 91.7,
  "currentGoldPrice": 65000,
  "loanAmount": 50000,
  "interestRate": 12.5,
  "tenureMonths": 12
}
```

### Contact API
```http
POST /api/contact
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+91-9876543210",
  "subject": "Gold Investment Query",
  "message": "I want to know about gold investment options"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd Viraj
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
npm start
```

## 📊 Business Logic

### Gold Valuation
- **Purity Calculation**: Weight × Purity % × Current Market Price
- **Market Value**: Gold Value × 0.95 (5% business margin)
- **Supported Types**: 24k, 22k, 18k, 14k, 10k

### Loan Calculations
- **LTV Ratio**: Loan Amount / Gold Value (max 75%)
- **EMI Calculation**: Standard EMI formula with compound interest
- **Interest Rates**: Configurable based on market conditions

### Customer Data Management
- **Transaction IDs**: Unique identifiers for all operations
- **Status Tracking**: Pending, Completed, Approved, etc.
- **Data Validation**: Input validation and error handling

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting (can be implemented)
- Secure API endpoints
- Data encryption (for production)

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Accessible design patterns

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Environment variables configuration

### Other Platforms
- Netlify
- AWS Amplify
- Docker containers

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_API_URL=your-api-url
DATABASE_URL=your-database-url
GOLD_PRICE_API_KEY=your-api-key
```

### Customization
- Update company information in components
- Modify color scheme in Tailwind config
- Add new API endpoints as needed
- Customize business logic and calculations

## 📈 Future Enhancements

- **Database Integration**: PostgreSQL/MongoDB for data persistence
- **User Authentication**: Customer and admin login systems
- **Payment Gateway**: Online payment processing
- **SMS/Email Notifications**: Automated customer communication
- **Mobile App**: React Native mobile application
- **Analytics Dashboard**: Advanced business insights
- **Multi-language Support**: Internationalization
- **API Rate Limiting**: Enhanced security measures

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: support@virajjewellers.com
- Phone: +91-9876543210
- Address: 123 Jewelry Street, Mumbai

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- shadcn/ui for the beautiful component library
- Lucide for the icon set

---

**Built with ❤️ by Viraj Jewellers Team**
# Viraj-suh
