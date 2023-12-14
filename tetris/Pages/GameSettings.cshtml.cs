using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;

namespace tetris.Pages
{
    public class GameSettingsModel : PageModel
    {
		private DataBase database = new DataBase();

		public int lvl_count = 0;

		public List<String> lvl_str = new List<String>();
		public void OnGet()
        {
			string queryString = "SELECT Level_Id FROM [Level];";

			SqlCommand command = new SqlCommand(queryString, database.getConnection());
			database.openConnection();
			SqlDataReader reader = command.ExecuteReader();
			List<string> data1 = new List<string>();
			while (reader.Read())
			{ 
				data1.Add(reader[0].ToString());
			}
			reader.Close();
			lvl_count = data1.Count;
			for (int i = 0; i < lvl_count; i++)
			{
				string str = "";
				str += data1[i];
				lvl_str.Add(str);
			}
			database.closeConnection();
		}
		[HttpPost]
		public IActionResult OnPost()
		{
			string stat = Request.Form["k1"];
			string level = Request.Form["k2"];
			string idd = level.Substring(8);
			return RedirectToPage("Game", new { id = idd , state = stat});
			
		}
	}
}