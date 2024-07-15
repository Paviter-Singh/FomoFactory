## API and ORM Selection

API is the base or building block for a project. Before developing the UI, I researched several stock APIs:

### API - Finnhub
- Website: [Finnhub](https://finnhub.io/)
- **Why**: Supports websockets for real-time updates, offers unlimited free requests, and has excellent documentation.

### ORM - Prisma
- **Why**: Chosen for its popularity and extensive support for databases like MSSQL, MySQL, PostgreSQL, etc.
- **Cons**: Requires creating replicas of the database when used with a local MongoDB instance.
