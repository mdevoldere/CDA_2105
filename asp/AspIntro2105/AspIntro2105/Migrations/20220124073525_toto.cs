using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AspIntro2105.Migrations
{
    public partial class toto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Vegetables",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Vegetables_CategoryId",
                table: "Vegetables",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vegetables_Category_CategoryId",
                table: "Vegetables",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vegetables_Category_CategoryId",
                table: "Vegetables");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.DropIndex(
                name: "IX_Vegetables_CategoryId",
                table: "Vegetables");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Vegetables");
        }
    }
}
