using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AppBank.DataAccessLayer.Migrations
{
    public partial class addAgencies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "banks",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "NbCustomers",
                table: "banks",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "banks_agencies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AgencyName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    bankId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_banks_agencies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_banks_agencies_banks_bankId",
                        column: x => x.bankId,
                        principalTable: "banks",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_banks_agencies_bankId",
                table: "banks_agencies",
                column: "bankId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "banks_agencies");

            migrationBuilder.DropColumn(
                name: "NbCustomers",
                table: "banks");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "banks",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(50)",
                oldMaxLength: 50);
        }
    }
}
