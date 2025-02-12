import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,useTheme, 
  Typography,
} from "@mui/material";

export default function MonthlySummaryCard({ data }) {  
const momRev = ((data[4].total_rev - data[3].total_rev) / data[3].total_rev) * 100;
const momCosts = ((data[4].total_costs - data[3].total_costs) / data[3].total_costs) * 100;
const profitMargin=((data[4].total_rev- data[4].total_costs)/data[4].total_rev)*100;
const prevPm=((data[3].total_rev- data[3].total_costs)/data[3].total_rev)*100;
const momProfit=((profitMargin-prevPm)/prevPm)*100
//const momRev = ((data[1].total_rev - data[0].total_rev) / data[0].total_rev) * 100;
const theme = useTheme();
return (
    <div className="cardDiv" style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
      <Box sx={{ minWidth: 275 }}>
        <Card  variant="outlined" 
        sx={{ 
          mb: 2,
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[4],
            transform: 'translateY(-2px)', 
              cursor:'pointer'
          },
          background: 'linear-gradient(to right bottom, #ffffff, #fafafa)'
        }}>
         <CardContent sx={{ p: 3 }}>
          <Typography
            gutterBottom
            sx={{ 
              color: 'text.secondary',
              fontSize: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontWeight: 500
            }}
          >
           Revenue to date
          </Typography>
          <Typography 
            variant="h5" 
            component="div"
            sx={{
              my: 1.5,
              fontWeight: 600,
              color: theme.palette.primary.main
            }}
          >
            ksh. <strong>{data[4].total_rev.toLocaleString('en-US')}</strong>
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            Monthly Change :{' '}
            <strong 
              style={{ 
                color: momRev >= 0 ? theme.palette.success.main : theme.palette.error.main 
              }}
            >
              {momRev.toFixed(2)}%
            </strong>
          </Typography>
        </CardContent>
        </Card>
      </Box>
      <Box sx={{ minWidth: 275 }}>
        <Card  variant="outlined" 
        sx={{ 
          mb: 2,
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[4],
            transform: 'translateY(-2px)',
              cursor:'pointer'
          },
          background: 'linear-gradient(to right bottom, #ffffff, #fafafa)'
        }}>
         <CardContent sx={{ p: 3 }}>
          <Typography
            gutterBottom
            sx={{ 
              color: 'text.secondary',
              fontSize: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontWeight: 500
            }}
          >
            Costs
          </Typography>
          <Typography 
            variant="h5" 
            component="div"
            sx={{
              my: 1.5,
              fontWeight: 600,
              color: theme.palette.primary.main
            }}
          >
            ksh. <strong>{data[4].total_costs.toLocaleString('en-US')}</strong>
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            Daily Average:{' '}
            <strong 
              style={{ 
                color: momCosts>= 0 ? theme.palette.success.main : theme.palette.error.main 
              }}
            >
               {momCosts.toFixed(2)}%
            </strong>
          </Typography>
        </CardContent>
        </Card>
      </Box>
      <Box sx={{ minWidth: 275 }}>
        <Card  variant="outlined" 
        sx={{ 
          mb: 2,
          borderRadius: 2,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme.shadows[4],
            transform: 'translateY(-2px)', 
              cursor:'pointer'
          },
          background: 'linear-gradient(to right bottom, #ffffff, #fafafa)'
        }}>
         <CardContent sx={{ p: 3 }}>
          <Typography
            gutterBottom
            sx={{ 
              color: 'text.secondary',
              fontSize: 14,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              fontWeight: 500
            }}
          >
            Profit Margin
          </Typography>
          <Typography 
            variant="h5" 
            component="div"
            sx={{
              my: 1.5,
              fontWeight: 600,
              color: theme.palette.primary.main
            }}
          >
            <strong>{profitMargin.toFixed(2)}</strong>
          </Typography>
          <Typography 
            sx={{ 
              color: 'text.secondary',
              mb: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}
          >
            MoM change:{' '}
            <strong 
              style={{ 
                color: momProfit >= 0 ? theme.palette.success.main : theme.palette.error.main 
              }}
            >
            {momProfit.toFixed(2)}
            </strong>
          </Typography>
        </CardContent>
        </Card>
      </Box>
    </div>
  );
}
